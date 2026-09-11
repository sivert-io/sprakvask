import { Robot } from 'phosphor-react';

export function Hero() {
  return (
    <section className="hero">
      <h1 id="title" className="wordmark" data-wordmark="Språkvask">
        Språkvask
      </h1>
      <p className="tagline"><strong>Norsk grammatikk</strong> for kodeagenter <Robot weight="regular" size={16} style={{ display: 'inline-block', verticalAlign: 'middle' }} /></p>
    </section>
  );
}
