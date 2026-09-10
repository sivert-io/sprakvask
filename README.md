# Språkvask

Norsk tekst som ser ut som den er skrevet av en som kan norsk.

En ferdighet for Claude Code og andre kodeagenter. Den koder Språkrådets normer
for rettskriving, tegnsetting og klarspråk – og legger til det normene ikke
dekker: hva som avslører at en norsk tekst er tenkt på engelsk.

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
