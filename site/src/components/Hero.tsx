import { useEffect, useRef } from 'react';
import { Robot } from 'phosphor-react';

/* ---------- noise helpers (no dependencies) ---------- */

function createNoise2D(seed: number) {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let s = seed;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number) => {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  };

  return (x: number, y: number) => {
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const aa = perm[perm[xi] + yi];
    const ba = perm[perm[xi + 1] + yi];
    const ab = perm[perm[xi] + yi + 1];
    const bb = perm[perm[xi + 1] + yi + 1];
    return lerp(
      lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
      lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
      v,
    );
  };
}

function fbm(noise: (x: number, y: number) => number, x: number, y: number, octaves = 4) {
  let value = 0, amplitude = 1, frequency = 1, max = 0;
  for (let i = 0; i < octaves; i++) {
    value += amplitude * noise(x * frequency, y * frequency);
    max += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }
  return value / max;
}

/* Draw water into a text-clipped background above the base letters. */

function WaveOverlay({ textRef }: { textRef: React.RefObject<HTMLSpanElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const noiseRef = useRef(createNoise2D(42));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let w = 0, h = 0, paintWidth = 0, paintHeight = 0;

    const resize = () => {
      const el = textRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      // The glyphs overhang the text box; paint the overlay's padded bounds.
      const overlay = canvas.parentElement!.getBoundingClientRect();
      paintWidth = overlay.width;
      paintHeight = overlay.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(paintWidth * dpr);
      canvas.height = Math.ceil(paintHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    const observer = new ResizeObserver(() => { resize(); if (motion.matches) draw(); });
    if (textRef.current) observer.observe(textRef.current);
    window.addEventListener('resize', resize);

    const layers = [
      { yBase: 0.55, amp: 0.12, speed: 0.12, freq: 1.8, color: 'oklch(59% 0.088 255)' },
      { yBase: 0.62, amp: 0.08, speed: 0.18, freq: 2.4, color: 'oklch(64% 0.075 255)' },
      { yBase: 0.68, amp: 0.06, speed: 0.09, freq: 1.2, color: 'oklch(82% 0.047 250)' },
    ];

    const t0 = performance.now();

    const draw = () => {
      const t = motion.matches ? 0 : (performance.now() - t0) / 1000;
      if (!w || !h) { animRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, paintWidth, paintHeight);

      for (const L of layers) {
        ctx.beginPath();
        const step = 2;

        for (let sample = 0; sample <= Math.ceil(paintWidth / step); sample++) {
          const x = Math.min(sample * step, paintWidth);
          const nx = x / w;
          const noiseVal = fbm(noiseRef.current, nx * L.freq + t * L.speed * 3, t * L.speed, 3);
          const y = h * (L.yBase + L.amp * noiseVal * 2);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(paintWidth, paintHeight);
        ctx.lineTo(0, paintHeight);
        ctx.closePath();
        ctx.fillStyle = L.color;
        ctx.fill();
      }

      const dataUrl = canvas.toDataURL();
      const waveEl = canvas.parentElement as HTMLElement;
      waveEl.style.backgroundImage = `url(${dataUrl})`;

      if (!motion.matches) animRef.current = requestAnimationFrame(draw);
    }

    const restart = () => {
      cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(draw);
    };
    motion.addEventListener('change', restart);
    restart();

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      motion.removeEventListener('change', restart);
      window.removeEventListener('resize', resize);
    };
  }, [textRef]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} aria-hidden="true" />;
}

/* ---------- hero ---------- */

export function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  return (
    <section className="hero">
      <h1 id="title" className="wordmark">
        <span ref={textRef} className="wordmark__text">
          Språkvask
          <span className="wordmark__wave-text" aria-hidden="true">
            Språkvask
            <WaveOverlay textRef={textRef} />
          </span>
        </span>
      </h1>
      <p className="tagline"><strong>Norsk grammatikk</strong> for kodeagenter <Robot weight="regular" size="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }} /></p>
    </section>
  );
}
