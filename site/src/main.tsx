import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './tokens.css';
import './index.css';

// The HTML is rendered at build time (scripts/prerender.mjs), so the page is
// readable before this runs. React only attaches the copy buttons.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
);
