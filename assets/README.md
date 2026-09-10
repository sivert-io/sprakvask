# Merkevare

## Skrift

Tre roller, tre skrifter.

| Rolle | Skrift | Hvorfor |
| --- | --- | --- |
| Ordmerke og overskrifter | **Fraunces** | Variabel antikva med optisk størrelse og litt uro i formene. Varm og litterær der de fleste utviklerverktøy er nøytrale |
| Brødtekst | **Spectral** | Antikva tegnet for skjerm og for lange tekster. Rolig der Fraunces er uttrykksfull |
| Kode og etiketter | **JetBrains Mono** | Der teksten er en identifikator og ikke en setning |

At brødteksten er en antikva og ikke en grotesk er ikke tilfeldig. Verktøyet
handler om prosa, og da skal dokumentasjonen leses som prosa. En grotesk ville
gjort den til et grensesnitt.

Fraunces mot Spectral er den samme spenningen i det små: den ene er skrevet for
å bli sett, den andre for å bli lest. Mono-en står utenfor og holder på det som
er maskin.

Alle tre er gratis og under Open Font License.

- [Fraunces](https://fonts.google.com/specimen/Fraunces)
- [Spectral](https://fonts.google.com/specimen/Spectral)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

```css
--font-display: "Fraunces", Georgia, serif;
--font-body: "Spectral", Georgia, serif;
--font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

## Farger

| Navn | Hex | Bruk |
| --- | --- | --- |
| Blekk | `#141119` | Bakgrunn på banneret |
| Blekk, lysere | `#1A171F` | Bokstavene i den lyse varianten |
| Papir | `#D9D9D9` | Bokstavene i den mørke varianten |
| Bølge | `#96AED3` | Vasken, over lyse bokstaver (50 %) |
| Bølge, lys | `#8FB0DA` | Vasken, over mørke bokstaver (92 %) |
| Dempet | `#7A7285` | Undertekst |

Bølgen er vitsen: den vasker gjennom bokstavene. Den skal ligge nederst og
brytes av bokstavformene, ikke ligge bak dem.

## Filer

| Fil | Bruk |
| --- | --- |
| `logo.svg` | Lyse bokstaver. På mørk bakgrunn |
| `logo-light.svg` | Mørke bokstaver. På lys bakgrunn |
| `banner.svg` | 1280×640 på mørk grunn. Sosial forhåndsvisning, presentasjoner |

Ordmerket er konvertert til kurver, så det trenger ingen skrift for å vises.
Undertittelen i banneret er levende tekst med en systemmono som reserve –
GitHub laster ikke nettskrifter i SVG, så den kan ikke være Fraunces der.

## Navnet

Ferdigheten heter **Språkvask**, ikke Språkrådet. Språkrådet er et statlig
organ, og en pakke oppkalt etter dem ville antydet at den var deres. Normene er
kreditert; tilknytning finnes ikke.
