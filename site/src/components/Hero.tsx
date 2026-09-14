import { RobotIcon } from './icons';

export function Hero() {
  return (
    <section className="hero">
      <h1 id="title" className="wordmark">
        <span className="wordmark__text">
          Språkvask
          {/* The same word again, filled with moving water through background-clip: text. */}
          <span className="wordmark__wave" aria-hidden="true">Språkvask</span>
        </span>
      </h1>
      <p className="tagline">
        <strong>Norsk grammatikk</strong> for kodeagenter <RobotIcon className="tagline__icon" />
      </p>
    </section>
  );
}
