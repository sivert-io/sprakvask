import { Check } from 'phosphor-react';
import { usePromptClipboard } from '../hooks/usePromptClipboard';

export function TryPrompt() {
  const { state, copy } = usePromptClipboard();

  return (
    <p className="try">
      <span>2. Start agenten på nytt, og skriv:</span>
      <button
        className="try__prompt"
        type="button"
        data-copy-prompt
        data-state={state}
        onClick={copy}
      >
        <span className="try-idle">«Bruk Språkvask til å forbedre teksten»</span>
        <span className="try-done">
          «Bruk Språkvask til å forbedre teksten»
          <Check size={14} weight="bold" style={{ marginLeft: '0.35em' }} />
        </span>
      </button>
    </p>
  );
}
