import { Hero } from './components/Hero';
import { Playground } from './components/Playground';
import { Footer } from './components/Footer';

export function App() {
  return (
    <main className="page">
      <article className="sheet" aria-labelledby="title">
        <div className="composition">
          <Hero />
          <Playground />
        </div>
        <Footer />
      </article>
    </main>
  );
}
