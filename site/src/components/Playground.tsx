import { CommandBar } from './CommandBar';
import { TryPrompt } from './TryPrompt';
import { Facts } from './Facts';

export function Playground() {
  return (
    <section className="playground" aria-labelledby="start">
      <h2 id="start">Installer Språkvask</h2>
      <p className="instruction">Kjør kommandoen i prosjektmappen.</p>
      <CommandBar />
      <TryPrompt />
      <Facts />
    </section>
  );
}
