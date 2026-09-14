import { useRef } from 'react';
import { CheckIcon } from './icons';
import { useClipboard } from '../hooks/useClipboard';

const PROMPT = 'Bruk Språkvask til å forbedre teksten';

export function TryPrompt() {
  const text = useRef<HTMLSpanElement>(null);
  const { state, copy } = useClipboard(PROMPT, text);

  return (
    <p className="try">
      <span>2. Start agenten på nytt, og skriv:</span>
      <button className="try__prompt" type="button" data-state={state} onClick={copy}>
        <span ref={text}>«{PROMPT}»</span>
        {state === 'copied' && <CheckIcon size={14} className="try__check" />}
      </button>
    </p>
  );
}
