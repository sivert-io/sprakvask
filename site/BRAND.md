# Merkevare

## Skrift

| Rolle | Skrift |
| --- | --- |
| Ordmerke og overskrifter | Fraunces |
| Brødtekst | DM Sans |
| Kode og etiketter | Geist Mono |

Nettsiden laster skriftene lokalt fra `site/public/fonts`. SVG-filene bruker
bokstavkonturer fra Fraunces i ordmerket og DM Sans i bannerets
undertittel. De trenger derfor ingen installerte skrifter. «Norsk grammatikk» bruker
DM Sans Bold, og resten bruker DM Sans Regular. Robotikonet hentes fra den
samme Phosphor-komponenten med vanlig strektykkelse som på nettsiden.
HarfBuzz sørger for at bokstavavstanden følger skriftenes OpenType-regler.

## Farger

Nettsidens farger og typografi er definert i `site/public/tokens.css`.
Nettsiden bruker kjølige gråtoner inspirert av stein og vann: bakgrunn
(`#c6cdd1`), ark (`#e0e5e7`), kommandofelt (`#e9edef`) og mørk skiferfarget
tekst og knapper (`#293740`). Bakgrunnen er ensfarget uten tekstur.
Blåtonene i vannet er beholdt.

Eksportene bruker lyst papir (`#fbfcfd`), blekk (`#1f1b24`) og tre blåtoner
(`#597fb1`, `#6d8fb9` og `#aec7e2`). Bakgrunnen er lys lilla (`#e4e4f2`).
Vannet ligger inne i bokstavene. På nettsiden beveger det seg rolig;
ved redusert bevegelse og i eksporterte bilder står det stille.

## Filer

| Fil | Bruk |
| --- | --- |
| `logo.svg` | Lyse bokstaver på mørk bakgrunn |
| `logo-light.svg` | Mørke bokstaver på lys bakgrunn |
| `icon.svg` | Favicon med en S og blått vann |
| `banner.svg` | Banner på lys bakgrunn, 1280 × 640 |
| `banner.png` | Rastereksport av banneret, brukt til sosial forhåndsvisning |
| `og-image.png` | Delingsbilde, 1200 × 630; nettsidens metadata bruker banner.png |

## Navnet

Ferdigheten heter **Språkvask**, ikke Språkrådet. Språkrådets normer er
grunnlaget, men prosjektet er ikke utgitt av eller tilknyttet Språkrådet.

## Generering

Kjør `python3 scripts/generate-brand.py` fra prosjektmappen for å lage SVG-filene
med fontTools og HarfBuzz (`hb-shape`). Node-avhengighetene i `site` må være installert. Kjør deretter `node scripts/render-brand.cjs` med sharp tilgjengelig
for å lage PNG-filene. Begge skriptene skriver direkte til `site/public/assets`,
som er den eneste kilden til merkefilene. README-en bruker de samme filene.
Vite kopierer dem til `site/dist` under bygging. Byggemappen er generert og skal
ikke sjekkes inn i Git.
