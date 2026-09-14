import { useCallback, useEffect, useRef, useState } from 'react';

export type CopyState = 'copied' | 'failed' | undefined;

/** Tells screen readers what happened. The live region is in index.html. */
function announce(message: string) {
  const region = document.getElementById('copy-status');
  if (region) region.textContent = message;
}

/**
 * Copies `text`. If the browser refuses, it selects `fallback` instead so the
 * visitor can copy it themselves.
 */
export function useClipboard(text: string, fallback: React.RefObject<HTMLElement | null>) {
  const [state, setState] = useState<CopyState>();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    clearTimeout(timer.current);

    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const node = fallback.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }

    setState(copied ? 'copied' : 'failed');
    announce(copied ? `Kopiert: ${text}` : 'Kunne ikke kopiere. Teksten er merket, så du kan kopiere den selv.');
    timer.current = setTimeout(() => setState(undefined), 2400);
  }, [text, fallback]);

  return { state, copy };
}
