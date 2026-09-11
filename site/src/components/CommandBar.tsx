import { useClipboard } from '../hooks/useClipboard';

export function CommandBar() {
  const { state, copy } = useClipboard('npx sprakvask');

  return (
    <div className="command">
      <code className="command__code">
        <span className="command__prompt" aria-hidden="true">$</span>
        <span data-command>npx sprakvask</span>
      </code>
      <button
        className="command__copy"
        type="button"
        data-copy
        data-state={state}
        aria-disabled={state === 'loading'}
        onClick={copy}
      >
        <span className="copy-idle">Kopier</span>
        <span className="copy-loading">Kopierer …</span>
        <span className="copy-done">Kopiert</span>
        <span className="copy-fail">Merk og kopier</span>
      </button>
    </div>
  );
}
