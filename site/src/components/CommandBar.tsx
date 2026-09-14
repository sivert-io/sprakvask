import { useRef } from 'react';
import { useClipboard } from '../hooks/useClipboard';

const COMMAND = 'npx sprakvask';

export function CommandBar() {
  const code = useRef<HTMLSpanElement>(null);
  const { state, copy } = useClipboard(COMMAND, code);

  return (
    <div className="command">
      <code className="command__code">
        <span className="command__prompt" aria-hidden="true">$</span>
        <span ref={code}>{COMMAND}</span>
      </code>
      <button className="command__copy" type="button" data-state={state} onClick={copy}>
        <span className="copy-idle">Kopier</span>
        <span className="copy-done">Kopiert</span>
        <span className="copy-fail">Merk og kopier</span>
      </button>
    </div>
  );
}
