<!-- sprakvask:start -->
# Språkvask – norsk språkvask etter Språkrådets normer

Gjelder all norsk tekst du skriver eller retter: grensesnitt, e-post,
dokumentasjon, commit-meldinger, vilkår. Gjelder **ikke** kode,
variabelnavn eller API-felt – `wantsFutureInvitations` skal ikke oversettes.

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

Se [tegnsetting.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/tegnsetting.md).

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

Se [stor-liten-forbokstav.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/stor-liten-forbokstav.md).

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

Se [tall-datoer.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/tall-datoer.md).

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

Se [e-post-og-brev.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/e-post-og-brev.md).

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

Se [forkortelser.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/forkortelser.md).

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

Les [engelsk-smitte.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/engelsk-smitte.md) hvis teksten er skrevet
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

Se [ki-markorer.md](https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/ki-markorer.md).

### 13. Eiendomsord etter substantivet

Norsk foretrekker bestemt form med etterstilt eiendomsord. Foranstilt er ikke
feil, men det er engelsk rytme og legger trykk på eieren.

- ✗ `din konto`, `ditt passord`, `dine opplysninger`
- ✓ `kontoen din`, `passordet ditt`, `opplysningene dine`


---

Fullstendige regler, inkludert nynorsk og klarspråk:
https://github.com/sivert-io/sprakvask
<!-- sprakvask:end -->
