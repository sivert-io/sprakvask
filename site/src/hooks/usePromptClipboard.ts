import { useState, useCallback, useRef } from 'react';

export function usePromptClipboard() {
  const [state, setState] = useState<string>();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = useCallback(async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const text = 'Bruk Språkvask til å forbedre teksten';

    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }

    timerRef.current = setTimeout(() => setState(undefined), 2400);
  }, []);

  return { state, copy };
}
