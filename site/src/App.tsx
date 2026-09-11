import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Playground } from './components/Playground';
import { Footer } from './components/Footer';

export function App() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let active = true;
    // The rendered text starts font loading; ready also settles if a font fails.
    void document.fonts.ready.then(() => {
      if (active) setFontsReady(true);
    });
    return () => { active = false; };
  }, []);

  return (
    <main className="page">
      <article className="sheet" data-ready={fontsReady} inert={!fontsReady} aria-labelledby="title">
        <div className="composition">
          <Hero />
          <Playground />
        </div>
        <Footer />
      </article>
    </main>
  );
}
