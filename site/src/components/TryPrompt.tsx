import { usePromptClipboard } from '../hooks/usePromptClipboard';

export function TryPrompt() {
  const { state, copy } = usePromptClipboard();

  return (
    <p className="try">
      <span>Start agenten på nytt, og skriv:</span>
      <button
        className="try__prompt"
        type="button"
        data-copy-prompt
        data-state={state}
        onClick={copy}
      >
        «Forbedre denne teksten med Språkvask.»
      </button>
    </p>
  );
}
