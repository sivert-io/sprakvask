# sprakvask.no

Statisk landingsside for Språkvask. Ingen byggetrinn eller JavaScript-rammeverk.

## Oppstart på VM

VM-en trenger Docker Engine med Compose-plugin og Git. Kjør:

```sh
git clone https://github.com/sivert-io/sprakvask.git
cd sprakvask/site
cp .env.example .env
docker compose up -d --build --wait
```

Disse filene må være committet og pushet før de kan hentes med `git clone`.
Oppstart bygger imaget `sprakvask-site:local`. Det inneholder HTML, fonter,
bilder og Nginx. Ingen Node-runtime, database eller volum er nødvendig.
Containeren starter automatisk etter omstart når Docker-tjenesten starter.

Standardadressen er `http://127.0.0.1:3544`, tilgjengelig bare på VM-en.
Det passer for en reverse proxy eller Cloudflare Tunnel som kjører på samme VM.
Pek `sprakvask.no` mot denne adressen og aktiver HTTPS i proxyen.
En proxy i en annen container trenger et delt Docker-nettverk; dens
`localhost` peker ikke på VM-en eller denne containeren.

For direkte HTTP-tilgang via VM-ens IP, endre `.env`:

```dotenv
SPRAKVASK_BIND=0.0.0.0
SPRAKVASK_PORT=80
SPRAKVASK_IMAGE=sprakvask-site:local
```

Kjør `docker compose up -d --wait` etter endringen og tillat TCP-port 80 i
VM-ens brannmur. Åpne deretter `http://VM-IP/`. Bruk HTTPS på det offentlige
domenet; nettleserens utklippstavlefunksjon trenger en sikker forbindelse.
DNS, sertifikater og HTTPS-terminering håndteres utenfor denne containeren.

## Kontroll og oppdatering

Kjør fra `site/`:

```sh
docker compose ps
docker compose logs --tail=100
curl -I http://127.0.0.1:3544/
```

Tilpass adressen hvis du endret porten. Containerens helsesjekk kjører hvert
30. sekund. Loggene roteres automatisk, med inntil tre filer på 10 MB.

Oppdater til nyeste kode:

```sh
git pull --ff-only
docker compose up -d --build --wait
```

En oppdatering erstatter den ene containeren og kan gi et kort avbrudd.
Stopp med `docker compose down`.

## Bygg eller flytt bare imaget

Fra roten av repoet:

```sh
docker build -f site/Dockerfile -t sprakvask-site:release .
docker image save -o sprakvask-site.tar sprakvask-site:release
```

Kopier arkivet, `site/compose.yaml` og `site/.env.example` til VM-en.
Bygg for VM-ens arkitektur dersom byggemaskinen er annerledes. For eksempel
gir `docker buildx build --platform linux/amd64 --load -f site/Dockerfile
-t sprakvask-site:release .` et image for en vanlig x86-VM.

På VM-en, i mappen med `compose.yaml`:

```sh
docker image load -i sprakvask-site.tar
cp .env.example .env
```

Sett `SPRAKVASK_IMAGE=sprakvask-site:release` i `.env`, velg port og start:

```sh
docker compose up -d --no-build --wait
```

Det kreves ingen registry-konto. Imaget er ikke publisert til et registry.

## Lokal forhåndsvisning og SEO

Fra roten av repoet fungerer fortsatt:

```sh
docker compose -f site/compose.yaml up -d --build --wait
```

Åpne `http://localhost:3544`. Domenet i canonical, sitemap og metadata er
`https://sprakvask.no/`. Etter lansering: kontroller HTTPS, delingsbildet på
`/assets/og-image.png` og send `/sitemap.xml` til Google Search Console.
