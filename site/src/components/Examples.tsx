import { useRef } from 'react';

type Example = { title: string; before: string; after: string; notes: string[] };

/* The same examples as the README. Keep them in step when one changes. */
const EXAMPLES: Example[] = [
  {
    title: 'Feilmelding i et skjema',
    before: 'Vennligst fyll ut alle påkrevde felter. En feil oppstod — prøv igjen senere.',
    after: 'Fyll ut navn og e-post. Vi fikk ikke lagret påmeldingen, så prøv en gang til.',
    notes: [
      '«Vennligst» er engelsk «please» og virker stivt.',
      '«En feil oppstod» sier ikke hva som gikk galt eller hva du skal gjøre.',
      'Em-streken finnes ikke i norsk.',
    ],
  },
  {
    title: 'Knapper og overskrifter',
    before: 'Meld Deg På Nå · Lagre Dine Innstillinger',
    after: 'Meld deg på nå · Lagre innstillingene',
    notes: [
      'Bare første ord og egennavn har stor forbokstav.',
      'Eiendomsordet står etter substantivet – på en knapp holder ofte ordet alene.',
    ],
  },
  {
    title: 'E-post',
    before: 'Hei Kari,\nTakk for å melde deg på! Arrangementet vil finne sted Lørdag 16/10 kl 18:00-23:00.\nMvh,\nOla Nordmann\nDaglig Leder',
    after: 'Hei, Kari\nTakk for at du meldte deg på! Vi ses lørdag 16. oktober kl. 18.00–23.00.\nVennlig hilsen\nOla Nordmann\ndaglig leder',
    notes: [
      'Komma står foran navnet i hilsenen, ikke etter.',
      '«Takk for å melde deg på» og «vil finne sted» er oversatt engelsk.',
      'Ukedager og titler har liten forbokstav, og datoer har ikke skråstrek.',
      'Avslutningen har ingen komma.',
    ],
  },
  {
    title: 'Priser, tall og frister',
    before: 'Billetten koster kr. 1,250.50 og må betales innen 1. oktober. 25% rabatt for medlemmer.',
    after: 'Billetten koster 1 250,50 kroner. Betal seinest 1. oktober. Medlemmer får 25 % rabatt.',
    notes: [
      'Tusenskille er mellomrom, og desimalskille er komma.',
      '«Innen 1. oktober» er tvetydig – mange leser det som «før 1. oktober».',
    ],
  },
  {
    title: 'Komma',
    before: 'For å fortsette, må du logge inn. Deltakere, som ikke har betalt mister plassen.',
    after: 'For å fortsette må du logge inn. Deltakere som ikke har betalt, mister plassen.',
    notes: [
      'Ikke komma etter et innledende uttrykk uten eget verb.',
      'En nødvendig relativsetning får komma etter, men ikke foran.',
    ],
  },
  {
    title: 'README skrevet av en språkmodell',
    before: 'Det er verdt å merke seg at dette verktøyet tilbyr en sømløs og robust løsning som adresserer behovet for effektiv håndtering av data.',
    after: 'Verktøyet leser CSV-filer og lagrer dem i PostgreSQL.',
    notes: [
      'Tomme innledninger og oppblåste ord sier ingenting konkret.',
      '«Adressere et behov» er oversatt engelsk.',
    ],
  },
  {
    title: 'Særskriving og apostrof',
    before: 'Skriv inn bruker navn og passord for å se Sivert’s påmeldings skjema.',
    after: 'Skriv inn brukernavn og passord for å se påmeldingsskjemaet til Sivert.',
    notes: ['Sammensatte ord skrives i ett ord.', 'Eiendomsform har ikke apostrof.'],
  },
  {
    title: 'Nynorsk',
    before: 'Søknaden behandlast i mai. Ta kontakt hvis det finnast feil i opplysningane.',
    after: 'Søknaden blir behandla i mai. Ta kontakt dersom det finst feil i opplysningane.',
    notes: ['Nynorsk har ikke s-passiv i presens.', '«Hvis» finnes ikke i nynorsk.'],
  },
];

export function Examples() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={opener} className="examples-open" type="button" onClick={() => dialog.current?.showModal()}>
        Se eksempler på hva som rettes
      </button>

      <dialog
        ref={dialog}
        className="examples"
        aria-labelledby="examples-title"
        // A click on the backdrop lands on the dialog element itself.
        onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }}
        // Browsers close a modal dialog on Escape themselves, but not every embedded
        // browser does. Closing an already closed dialog does nothing.
        onKeyDown={(event) => { if (event.key === 'Escape') dialog.current?.close(); }}
        // Keyboard users land back on the link they opened the examples from.
        onClose={() => opener.current?.focus()}
      >
        <div className="examples__inner">
          <header className="examples__header">
            <h2 id="examples-title">Før og etter språkvask</h2>
            <button className="examples__close" type="button" onClick={() => dialog.current?.close()}>
              Lukk
            </button>
          </header>

          <ol className="examples__list">
            {EXAMPLES.map((example) => (
              <li key={example.title} className="example">
                <h3>{example.title}</h3>
                <div className="example__pair">
                  <p className="example__text example__text--before">
                    <span className="example__label">Før</span>
                    <span className="example__body">{example.before}</span>
                  </p>
                  <p className="example__text example__text--after">
                    <span className="example__label">Etter</span>
                    <span className="example__body">{example.after}</span>
                  </p>
                </div>
                <ul className="example__notes">
                  {example.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
