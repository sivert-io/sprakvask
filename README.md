<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo.svg">
  <img src="assets/logo-light.svg" alt="Språkvask" width="440">
</picture>

**Norsk språkvask etter Språkrådets normer – for Claude Code og andre kodeagenter**

[![npm](https://img.shields.io/npm/v/sprakvask?color=%238FB0DA&label=npm)](https://www.npmjs.com/package/sprakvask)
[![lisens](https://img.shields.io/badge/lisens-MIT-8FB0DA)](LICENSE)

</div>

---

# Språkvask

Norsk tekst som ser ut som den er skrevet av en som kan norsk.

En **skill** for Claude Code – og et vanlig sett med regler for enhver kodeagent
som skriver norsk. Den koder **Språkrådets** normer for rettskriving,
tegnsetting og klarspråk, og legger til det normene ikke dekker: hva som
avslører at en norsk tekst er tenkt på engelsk.

> **In English:** a Norwegian language skill for Claude Code and other coding
> agents. It encodes the orthography, punctuation and plain-language norms
> published by Språkrådet (the Language Council of Norway), and catches the
> tells of Norwegian written by someone thinking in English. Works for both
> written standards, bokmål and nynorsk.

```
✗  Vennligst fyll ut ditt navn — vi sender deg en bekreftelse.
✓  Fyll ut navnet ditt – vi sender deg en bekreftelse.
```

Tre feil i én linje: `vennligst` er `please` i norsk drakt, `ditt navn` er
engelsk ordstilling, og em-streken finnes ikke i norsk.

## Installer

**I ett prosjekt:**

```bash
npx sprakvask
```

**For alle prosjekter:**

```bash
npx sprakvask --global
```

**Som plugin i Claude Code:**

```
/plugin marketplace add sivert-io/sprakvask
/plugin install sprakvask@sprakvask
```

Start agenten på nytt etterpå.

## Hva den gjør

Den slår inn når teksten er norsk – i grensesnitt, e-poster, dokumentasjon,
commit-meldinger, vilkår. Den rører ikke kode: `wantsFutureInvitations` blir
ikke `ønskerFramtidigeInvitasjoner`.

Ti sjekker ligger i selve ferdigheten og dekker det meste. Detaljene ligger i
`references/` og lastes bare ved tvil:

| Fil | Innhold |
| --- | --- |
| `tegnsetting.md` | Komma, tankestrek, anførselstegn, apostrof |
| `ordvalg.md` | Særskriving, og/å, de/dem, sin/hans |
| `tall-datoer.md` | Tall, datoer, klokkeslett, valuta, forkortelser |
| `klarspraak.md` | Aktiv form, substantivsjuke, feilmeldinger, knapper |
| `engelsk-smitte.md` | Det som avslører oversatt norsk |
| `nynorsk.md` | Der nynorsk skiller seg fra bokmål |

## De vanligste feilene

| | Feil | Riktig |
| --- | --- | --- |
| Em-strek | `mat — drikke` | `mat – drikke` |
| Oxford-komma | `mat, drikke, og premier` | `mat, drikke og premier` |
| Særskriving | `lørdags kvelden` | `lørdagskvelden` |
| Anførselstegn | `"hei"` | `«hei»` |
| Klokkeslett | `kl. 09:00` | `kl. 09.00` |
| Tusenskille | `1,000` | `1 000` |
| Overskrifter | `Meld Deg På` | `Meld deg på` |
| Eiendomsform | `Sivert's bil` | `Siverts bil` |
| Høflighet | `Vennligst prøv igjen` | `Prøv igjen` |
| Eiendomsord | `din konto` | `kontoen din` |

## Kilder og forbehold

Normene er hentet fra [Språkrådet](https://sprakradet.no) og
[Klarspråk](https://klarspraak.no). Ordformer og bøyning slår du opp i
[Ordbøkene](https://ordbokene.no).

Dette er en sammenfatning laget av andre. Den er **ikke** utgitt av, tilknyttet
eller godkjent av Språkrådet, og den erstatter ikke å slå opp når du er i tvil.
Finner du en regel som er gjengitt feil, er en issue eller en pull request
velkommen.

## Lisens

MIT. Se [LICENSE](LICENSE).
