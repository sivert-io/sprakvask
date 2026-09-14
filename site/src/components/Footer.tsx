import { ArrowSquareOutIcon } from './icons';

export function Footer() {
  return (
    <footer className="footer">
      <p>
        En åpen norsk språkferdighet for kodeagenter. Støtter blant annet
        Codex, Cursor, Claude Code og Copilot. Ikke utgitt av eller
        tilknyttet Språkrådet. MIT-lisens.
      </p>
      <nav className="footer__links" aria-label="Prosjektlenker">
        <a href="https://github.com/sivert-io/sprakvask" target="_blank" rel="noopener noreferrer">
          <ArrowSquareOutIcon size={14} />
          Kildekode
        </a>
        <a href="https://www.npmjs.com/package/sprakvask" target="_blank" rel="noopener noreferrer">
          <ArrowSquareOutIcon size={14} />
          npm
        </a>
      </nav>
    </footer>
  );
}
