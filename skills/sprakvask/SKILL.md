---
name: sprakvask
description: "Norsk språkvask etter Språkrådets normer og klarspråksråd. Bruk når teksten som skrives eller rettes er på norsk – bokmål eller nynorsk – i grensesnitt, e-post, dokumentasjon, vilkår, commit-meldinger eller kommentarer i kode. Fanger særlig feilene som oppstår når norsk skrives av noen som tenker på engelsk."
version: 1.3.0
---

# Språkvask

Norsk tekst som ser ut som den er skrevet av en som kan norsk.

«Språkvask» er det norske ordet for denne jobben: å gå gjennom en tekst og rette
den språklig uten å endre hva den sier. Ferdigheten bygger på Språkrådets normer
for rettskriving, tegnsetting og klarspråk – veiledningssidene og hele
spørsmål-og-svar-basen – og legger til det de ikke dekker: hva som avslører at
en norsk tekst er skrevet med engelsk tankegang bak.

**Kilde:** normene er hentet fra [Språkrådet](https://sprakradet.no) og
Språkrådets [klarspråkssider](https://sprakradet.no/klarsprak/). Dette er en
sammenfatning laget av andre, med egne formuleringer og eksempler. Den er ikke
utgitt av, tilknyttet eller godkjent av Språkrådet.

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
2. **Gå gjennom sjekkene under.** De er sortert etter hvor ofte de slår ut i
   tekst skrevet av en maskin eller av en nordmann som har lest mye engelsk.
3. **Er teksten lengre enn et avsnitt, les [klarspraak.md](references/klarspraak.md).**
   Rettskriving gjør en tekst riktig. Klarspråk gjør den lest.
4. **Skriver du README, dokumentasjon, commit-meldinger eller PR-beskrivelser,
   se [teksttyper.md](references/teksttyper.md).**

Detaljene ligger i `references/`. Last bare filen du trenger – sjekkene under
dekker det meste.

---

## Sjekkene

### 1. Tankestrek, ikke em-strek

Norsk bruker **tankestrek** (–, U+2013). Som innskudd med mellomrom rundt:

> Vi spiser sammen lørdag kveld – alle får det samme.

I intervaller **uten** mellomrom: `16.–18. oktober`, `kl. 9–15`. Streken betyr
«fra … til», så ikke `fra kl. 13–15`.

Aldri em-strek (`—`). Den finnes ikke i norsk og er det sikreste enkelttegnet
på at teksten er oversatt fra engelsk.

### 2. Komma: færre enn på engelsk, men noen andre steder

- **Ikke komma foran `og`** i oppramsinger: `mat, drikke og premier`.
- **Ikke komma etter et innledende uttrykk uten verb:**
  ✗ `For å melde deg på, må du logge inn.` → ✓ `For å melde deg på må du
  logge inn.`
- **Komma etter en leddsetning som står først:** `Når du har betalt, er
  plassen din.`
- **Komma mellom to helsetninger** og alltid foran `men`: `Dørene åpner
  klokka 16, og maten er klar klokka 17.`
- **Nødvendig relativsetning** får komma etter, ikke foran: `Deltakere som
  ikke har betalt, mister plassen.`

Se [tegnsetting.md](references/tegnsetting.md).

### 3. Sammensatte ord i ett ord

Særskriving er den mest utbredte feilen i norsk, og den endrer betydning.

- ✗ `lørdags kvelden`, `påmeldings frist`, `senior utvikler`
- ✓ `lørdagskvelden`, `påmeldingsfrist`, `seniorutvikler`

Men noen uttrykk **skal** stå i flere ord: `til stede`, `om bord`, `for
øvrig`, `en del`, `etter hvert`, `i dag`.

### 4. Stor forbokstav bare der norsk har det

- **Overskrifter og knapper:** bare første ord. ✗ `Meld Deg På` → ✓ `Meld deg
  på`.
- **Titler og stillinger er små**, også i signaturer: `daglig leder`,
  `direktør Kari Nordmann`.
- **`du` og `deg` er alltid små.** Stor `Du` er feil, ikke høflig.
- **Avdelinger, styrer og roller i avtaler er små:** `styret`,
  `kundeservice`, `kjøperen`.
- **Måneder, ukedager, høytider, språk og nasjonaliteter er små:**
  `mandag 16. oktober`, `jul`, `norsk`.

Se [stor-liten-forbokstav.md](references/stor-liten-forbokstav.md).

### 5. Anførselstegn er «…»

> Hun skrev: «Vi ses på lørdag.»

**Komma står utenfor:** `«Vi ses», skrev hun.` Spørsmålstegn og utropstegn
som hører til sitatet, står innenfor, og da uten komma: `«Kommer du?» spurte
hun.` Sitat i sitat: `‘…’`.

### 6. Tall og beløp

- Tusenskille er mellomrom, desimalskille er komma: `1 000`, `12 500 kroner`,
  `3,5 timer`. Aldri `1,000` eller `3.5`.
- Tall til og med tolv med bokstaver i løpende tekst – men vær konsekvent i
  samme setning.
- `450 kr` eller `450 kroner` – ikke punktum etter `kr`.
- `25 %` med mellomrom eller `25 prosent`.

### 7. Datoer, klokkeslett og frister

- `16. oktober 2026` eller `16.10.2026`. Aldri skråstrek.
- `kl. 09.00` og `kl. 09:00` er **begge** riktige. Velg ett.
- **`innen 1. oktober` er tvetydig.** Skriv `seinest 1. oktober` eller
  `fristen er 1. oktober`.

Se [tall-datoer.md](references/tall-datoer.md).

### 8. E-posthilsener

- `Hei, Anna` – komma **foran** navnet, ikke etter. `Hei` alene på linjen
  får ingen tegn.
- Avslutningen har ingen komma, og tittelen har liten forbokstav:

  ```
  Vennlig hilsen
  Kari Nordmann
  daglig leder
  ```

- `Mvh.` frarådes i formell e-post. Skriv ordene ut.

Se [e-post-og-brev.md](references/e-post-og-brev.md).

### 9. Eiendomsform og bøyning uten apostrof

- ✓ `Olas bil`, `NRKs sendinger`, `EUs regler`
- ✗ `Ola's bil`, `NRK's sendinger`
- Bøyning av forkortelser med bindestrek: `pc-en`, `sms-en`, ikke `pc'en`.

Apostrof bare når navnet ender på s, x eller z: `Anders' bil`, `Felix' hund`.

### 10. Forkortelser

- `ev.`, ikke `evt.` (som betyr «etter vår tidsregning»). `ift.`, ikke
  `ifht.` `md.`, ikke `mnd.` `osv.`, ikke `etc.`
- Aldri to punktum: `… mat, drikke osv.`
- I løpende tekst er det som regel bedre å skrive ordet ut.

Se [forkortelser.md](references/forkortelser.md).

### 11. Oversatt engelsk

Riktige ord i engelsk rekkefølge. De vanligste:

| Oversatt | Norsk |
| --- | --- |
| `Vennligst fyll ut …` | `Fyll ut …` |
| `når det kommer til` | `når det gjelder` |
| `ta plass` (take place) | `finne sted`, `skje` |
| `Trykk knappen` | `Trykk på knappen` |
| `du trenger å` | `du må` |
| `adressere et problem` | `ta tak i`, `løse` |
| `Vi beklager ulempen` | si hva som skjedde og hva som skjer nå |

Les [engelsk-smitte.md](references/engelsk-smitte.md) hvis teksten er skrevet
av en maskin eller oversatt.

### 12. KI-preg

Da Språkrådet testet ChatGPT, handlet de fleste feilene på bokmål om
tegnsetting og store og små bokstaver – sjekk 2 og 4. I tillegg:

- **Stryk innledninger og avslutninger som ikke sier noe:** `Det er verdt å
  merke seg at …`, `Kort oppsummert …`, et sluttavsnitt som gjentar teksten.
- **Ikke oppblåste ord:** `sømløs`, `robust`, `banebrytende`, `helhetlig`.
  Si hva det faktisk gjør.
- **Én form per ord.** Språkmodeller veksler mellom `frem` og `fram`, `stein`
  og `sten` i samme tekst.
- **Ikke kolon i hver overskrift**, fet skrift overalt eller emoji som
  punktmarkører.

Se [ki-markorer.md](references/ki-markorer.md).

### 13. Eiendomsord etter substantivet

Norsk foretrekker bestemt form med etterstilt eiendomsord. Foranstilt er ikke
feil, men det er engelsk rytme og legger trykk på eieren.

- ✗ `din konto`, `ditt passord`, `dine opplysninger`
- ✓ `kontoen din`, `passordet ditt`, `opplysningene dine`

---

## Etter sjekkene

Si hva du rettet, kort, og bare det som betyr noe. «Rettet særskriving i tre
overskrifter» er nyttig. En liste over hvert komma er ikke.

**Ikke rett det som er riktig.** Norsk har mange likestilte former –
`frem`/`fram`, `hvis`/`viss`, `mer`/`mere`, `kl. 09.00`/`kl. 09:00`. Da er
jobben å gjøre teksten konsekvent, ikke å velge din favoritt. Private navn på
firmaer og produkter skrives slik eieren skriver dem.

Er du i tvil om et ord eller en bøyning, slå det opp i
[Bokmålsordboka og Nynorskordboka](https://ordbokene.no) framfor å gjette.
Gjetter du likevel, si at du gjettet.

---

## Referanser

Last dem én av gangen, og bare når du trenger dem.

| Fil | Når |
| --- | --- |
| [tegnsetting.md](references/tegnsetting.md) | Komma, punktum, kolon, tankestrek, anførselstegn, apostrof, punktlister |
| [stor-liten-forbokstav.md](references/stor-liten-forbokstav.md) | Overskrifter, titler, institusjoner, du/De, merkenavn |
| [tall-datoer.md](references/tall-datoer.md) | Tall, beløp, prosent, datoer, klokkeslett, frister, telefonnumre, paragrafer |
| [forkortelser.md](references/forkortelser.md) | Punktum eller ikke, vanlige feil, de vanligste forkortelsene |
| [ordvalg.md](references/ordvalg.md) | Særskriving, og/å, da/når, de/dem, sin/deres, forvekslinger, faste uttrykk, preposisjoner, stavemåter |
| [grammatikk.md](references/grammatikk.md) | Bøyning, samsvar, partisipp, verb, pronomen, konsekvens |
| [e-post-og-brev.md](references/e-post-og-brev.md) | Hilsener, signatur, emnefelt, høflighet |
| [klarspraak.md](references/klarspraak.md) | Setningsbygning, passiv, substantivsyke, stive ord, digitale tjenester |
| [engelsk-smitte.md](references/engelsk-smitte.md) | Oversatte vendinger, lånte betydninger, norske avløserord |
| [ki-markorer.md](references/ki-markorer.md) | Oppblåste ord, tomme fraser og mønstre som avslører KI-tekst |
| [teksttyper.md](references/teksttyper.md) | Grensesnitt, dokumentasjon, README, commit, PR, versjonsmerknader, fagspråk |
| [ord-om-mennesker.md](references/ord-om-mennesker.md) | Kjønn, hudfarge, alder – ord som kan såre |
| [nynorsk.md](references/nynorsk.md) | Konsekvent nynorsk, passiv, vanlige feil, ordvalg |
