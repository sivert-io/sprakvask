import { Robot } from 'phosphor-react';

export function Hero() {
  return (
    <section className="hero">
      <h1 id="title" className="wordmark" data-wordmark="Språkvask">
        Språkvask
      </h1>
      <p className="tagline"><strong>Norsk grammatikk</strong> for kodeagenter <Robot weight="regular" emSize={1.15} /></p>
    </section>
  );
}
