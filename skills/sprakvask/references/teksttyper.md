# Teksttyper

Reglene i de andre filene gjelder overalt. Men teksttypen avgjør hva som
kommer først, hvor mye som skal med og hvilken tone som passer.

## Grensesnitt

Se også «Digitale tjenester» i [klarspraak.md](klarspraak.md).

| Element | Slik | Ikke slik |
| --- | --- | --- |
| Knapp | `Lagre`, `Betal 450 kr`, `Gå til oversikten` | `OK`, `Klikk her for å lagre` |
| Bekreftelse | `Endringene er lagret.` | `Operasjonen ble gjennomført.` |
| Feilmelding | `Skriv inn fødselsnummeret ditt.` | `Feltet er påkrevd.` |
| Tom tilstand | `Du har ingen påmeldinger ennå.` og hva du kan gjøre | `Ingen data.` |
| Hjelpetekst | hva feltet betyr og hvorfor vi spør | navnet på API-feltet |
| Lenke | `Les salgsvilkårene` | `Klikk her`, `Les mer` |

- Knapper og menypunkter: verb i imperativ, uten punktum, stor forbokstav
  bare i første ord.
- Samme ord for samme handling overalt. Heter knappen `Meld deg på`, skal
  e-posten ikke snakke om «registreringen din».

## Dokumentasjon

Fire typer tekst med hver sin jobb. Ikke bland dem:

- **Veiledning** (gjøre noe): nummererte steg, ett grep per steg, imperativ.
- **Opplæring** (lære noe fra bunnen): leder leseren trinn for trinn mot et
  resultat.
- **Referanse** (slå opp): nøktern og tett – parametere, verdier,
  begrensninger. Ingen begrunnelser.
- **Forklaring** (forstå hvorfor): bakgrunn, valg og sammenhenger.

Står det lange begrunnelser midt i en veiledning, flytt dem til en forklaring
og lenk dit.

**Overskrifter i veiledninger** begynner med `Slik`: `Slik setter du opp
betaling` – ikke `Hvordan sette opp betaling` (engelsk *how to*) og ikke
`Oppsett av betaling` (substantivsyke).

**Navn på knapper og menyvalg** står i fet skrift, ikke i anførselstegn:
`Trykk på **Lagre**.`

**Kommandoer og kode** står i kodeblokker, og navn på variabler, funksjoner og
felter oversettes aldri.

## README

1. Første setning sier hva prosjektet gjør.
2. Så hvordan du kommer i gang: installere, kjøre, teste.
3. Så detaljene.

Ikke selg prosjektet, og ikke forklar hvorfor det finnes før leseren vet hva
det er. Se [ki-markorer.md](ki-markorer.md).

## Commit-meldinger

- **Første linje** sier hva endringen gjør – kort og uten punktum til slutt.
- Velg én form i prosjektet og hold deg til den: imperativ (`Rett tidssone i
  kvitteringen`) eller beskrivende (`Retter tidssone i kvitteringen`). Bruker
  prosjektet Conventional Commits, står typen først: `fix: rett tidssone i
  kvitteringen`.
- **Brødteksten** forklarer hvorfor. Koden viser hvordan.

## PR-beskrivelser

- Først: hva endres, og hvorfor.
- Så: hvordan det er testet, og hva den som ser gjennom, bør se ekstra på.
- Konkret. Ikke «en mer robust og helhetlig løsning» – si hva som er rettet.

> ✗ Denne PR-en adresserer behovet for en mer robust håndtering av betalinger.
> ✓ Betalinger som blir avbrutt, blir nå stående som «ikke betalt» i stedet
>   for å forsvinne.

## Beslutningsnotater (ADR)

- Konteksten: kort og faktisk.
- Beslutningen i presens og aktiv: `Vi bruker PostgreSQL` – ikke `Det ble
  besluttet å benytte PostgreSQL`.
- Konsekvensene: konkrete, også de negative.

## Versjonsmerknader og endringslogg

Skriv fra brukerens side. Hva kan du nå, og hva er rettet?

> Nå kan du betale med Vipps.
> Rettet: Kvitteringen viste feil klokkeslett for arrangementer i sommertid.

## Kommentarer i kode

Norske kommentarer følger de samme reglene. Forklar hvorfor, ikke hva.

## Fagspråk og målgruppe

Hvem som leser, avgjør ordene.

- **Til utviklere:** etablerte engelske fagord står – `commit`, `branch`,
  `merge`, `pull request`, `container`, `token`, `cache`, `deploy`. Ikke finn
  opp norske ord ingen bruker.
- **Til vanlige brukere:** norske ord – `innstillinger`, `lenke`,
  `nettleser`, `innlogging`, `sikkerhetskopi`. Se avløserordene i
  [engelsk-smitte.md](engelsk-smitte.md).

Engelske fagord bøyes norsk: `branchen`, `containeren`, `pull requesten`.
Forkortelser får bindestrek foran endelsen: `PR-en`, `API-et`. Et uttrykk på
flere ord får bindestrek til et norsk etterledd: `pull request-beskrivelse`
(som `fair play-regler`).
