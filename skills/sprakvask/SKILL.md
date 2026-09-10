---
name: sprakvask
description: "Norsk språkvask etter Språkrådets normer. Bruk når teksten som skrives eller rettes er på norsk – bokmål eller nynorsk – i kode, grensesnitt, e-post, dokumentasjon eller commit-meldinger. Fanger særlig feilene som oppstår når norsk skrives av noen som tenker på engelsk."
version: 1.0.0
---

# Språkvask

Norsk tekst som ser ut som den er skrevet av en som kan norsk.

«Språkvask» er det norske ordet for denne jobben: å gå gjennom en tekst og rette
den språklig uten å endre hva den sier. Ferdigheten koder Språkrådets normer for
rettskriving, tegnsetting og klarspråk, og legger til det de ikke dekker – hva
som avslører at en norsk tekst er skrevet med engelsk tankegang bak.

**Kilde:** normene er hentet fra [Språkrådet](https://sprakradet.no) og
[Klarspråk](https://klarsprak.no). Dette er en sammenfatning laget av andre.
Den er ikke utgitt av, tilknyttet eller godkjent av Språkrådet.

---

## Når den gjelder

Alltid, når teksten er norsk. Det inkluderer:

- grensesnittekst, knapper, feilmeldinger, tomme tilstander
- e-poster og varsler
- dokumentasjon, README-er, kommentarer i kode
- commit-meldinger og PR-beskrivelser
- vilkår, personvernerklæringer og annet juridisk

Den gjelder **ikke** kode, variabelnavn, API-felt eller strenger som er
identifikatorer. `wantsFutureInvitations` skal ikke bli `ønskerFramtidigeInvitasjoner`.

---

## Rekkefølgen

1. **Skriv eller rett teksten.**
2. **Kjør de ti sjekkene under.** De er sortert etter hvor ofte de slår ut i
   tekst skrevet av en maskin eller av en nordmann som har lest for mye engelsk.
3. **Er teksten lengre enn et avsnitt, les [klarspraak.md](references/klarspraak.md).**
   Rettskriving gjør en tekst riktig. Klarspråk gjør den lest.

Trenger du detaljene, ligger de i `references/`. Ikke last dem med mindre du er
i tvil – de ti sjekkene dekker det aller meste.

---

## De ti sjekkene

### 1. Tankestrek, ikke bindestrek eller em-strek

Norsk bruker **tankestrek** (–, U+2013) med mellomrom rundt:

> Vi spiser sammen lørdag kveld – alle får det samme.

Ikke bindestrek (`-`), som er for sammensetninger, og **aldri** em-strek (`—`),
som er engelsk. Em-strek i norsk tekst er det sikreste enkelttegnet på at noe er
oversatt fra engelsk.

I intervaller står tankestreken **uten** mellomrom: `16.–18. oktober`, `kl. 9–15`.

### 2. Ikke komma foran «og» i oppramsinger

Engelsk har Oxford-komma. Norsk har det ikke.

- ✗ `mat, drikke, og premier`
- ✓ `mat, drikke og premier`

Komma foran «og» settes bare mellom to **helsetninger**:

> Vi åpner dørene klokka 16, og da er maten klar.

### 3. Sammensatte ord skrives i ett ord

Særskriving er den mest utbredte feilen i norsk, og den endrer betydning.

- ✗ `lørdags kvelden`, `data spill`, `påmeldings frist`
- ✓ `lørdagskvelden`, `dataspill`, `påmeldingsfrist`

Er ordet langt, er det fortsatt ett ord. `arrangementsgjennomføring` er stygt,
men det er ikke to ord.

### 4. Anførselstegn er «…», ikke "…"

> Han sa «vi ses på lørdag».

Rette anførselstegn (`"`) er engelsk maskinskrift. Bruk `«»`. Enkle sitater
inni: `‘…’`.

### 5. Klokkeslett og datoer

`kl. 09.00` og `kl. 09:00` er **begge** riktige – Språkrådet godtar punktum og
kolon mellom timer og minutter. Velg ett og hold deg til det.

Tidsrom skrives med tankestrek uten mellomrom: `kl. 13–15`. Tankestreken betyr
«fra–til», så skriv **ikke** `fra kl. 13–15`. Har du «fra», trenger du «til».

Datoer: `16. oktober 2026`. Ingen komma mellom dag og år. Måneder og ukedager
skrives med **liten** forbokstav: `mandag`, `oktober`.

### 6. Tall: mellomrom som tusenskille, komma som desimalskille

- ✓ `1 000`, `12 500 kroner`, `3,5 timer`
- ✗ `1,000`, `12,500`, `3.5`

Tallene én til tolv skrives med bokstaver i løpende tekst, resten med siffer –
med mindre teksten er teknisk eller full av tall, da er siffer greit hele veien.

### 7. Overskrifter har bare stor forbokstav i første ord

Engelsk bruker Title Case. Norsk gjør ikke.

- ✗ `Meld Deg På NTLAN`
- ✓ `Meld deg på NTLAN`

Egennavn beholder selvsagt stor forbokstav.

### 8. Eiendomsform uten apostrof

- ✓ `Sivert**s** bil`, `Norsk Tipping**s** lokaler`
- ✗ `Sivert's bil`

Apostrof bare når navnet slutter på s, x eller z: `Anders' bil`, `Felix' hund`.

### 9. Ikke oversett «please»

Norsk har ikke et ord for «please» i imperativ. «Vennligst» er stivt og lyder
som en oversettelse. Skriv setningen om:

- ✗ `Vennligst fyll ut alle feltene.`
- ✓ `Fyll ut alle feltene.`
- ✓ `Du må fylle ut alle feltene for å gå videre.`

### 10. Eiendomspronomen står etter substantivet

Norsk foretrekker bestemt form med etterstilt eiendomsord. Foranstilt er ikke
feil, men det er engelsk rytme og virker trykket.

- ✗ `din konto`, `ditt passord`, `dine opplysninger`
- ✓ `kontoen din`, `passordet ditt`, `opplysningene dine`

---

## Etter sjekkene

Si hva du rettet, kort, og bare det som betyr noe. «Rettet særskriving i tre
overskrifter» er nyttig. En liste over hvert komma er ikke.

Er du i tvil om et ord eller en bøyning, slå det opp i
[Bokmålsordboka og Nynorskordboka](https://ordbokene.no) framfor å gjette.
Gjetter du likevel, si at du gjettet.

---

## Referanser

Last dem én av gangen, og bare når du trenger dem.

| Fil | Når |
| --- | --- |
| [tegnsetting.md](references/tegnsetting.md) | Komma, kolon, semikolon, parenteser, apostrof |
| [ordvalg.md](references/ordvalg.md) | Særskriving, og/å, de/dem, sin/hans, vanlige forvekslinger |
| [tall-datoer.md](references/tall-datoer.md) | Tall, datoer, klokkeslett, valuta, prosent, forkortelser |
| [klarspraak.md](references/klarspraak.md) | Setningsbygning, passiv, substantivsjuke, du-form |
| [engelsk-smitte.md](references/engelsk-smitte.md) | Hva som avslører oversatt norsk. Les denne hvis teksten er skrevet av en maskin |
| [nynorsk.md](references/nynorsk.md) | Der nynorsk skiller seg fra bokmål |
