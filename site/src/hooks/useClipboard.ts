import { useState, useCallback, useRef } from 'react';

export function useClipboard(text: string, onStatus?: (msg: string) => void) {
  const [state, setState] = useState<string>();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const copy = useCallback(async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState('loading');

    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const range = document.createRange();
      const el = document.querySelector('[data-command]') as Node;
      if (el) {
        range.selectNodeContents(el);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }

    setState(copied ? 'copied' : 'failed');
    onStatus?.(copied ? 'Kopiert: npx sprakvask' : 'Kunne ikke kopiere. Kommandoen er merket.');
    timerRef.current = setTimeout(() => setState(undefined), 2400);
  }, [text, onStatus]);

  return { state, copy };
}
