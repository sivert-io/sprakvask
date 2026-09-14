// Renders the page to HTML at build time and writes it into dist/index.html.
// Visitors and search engines get real text on the first response; the client
// bundle only hydrates the copy buttons.
import { createHash } from 'node:crypto';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const html = await readFile(htmlPath, 'utf8');
const marker = '<div id="root"></div>';

if (!html.includes(marker)) {
  throw new Error(`Fant ikke ${marker} i dist/index.html.`);
}

// Inline the stylesheet. It is small, and a separate request would block the first paint.
const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!cssLink) throw new Error('Fant ikke stilarket i dist/index.html.');
const css = await readFile(path.join(root, 'dist', cssLink[1]), 'utf8');

// Brand files in /assets/ keep their names, so Cloudflare and browsers cache
// them by URL. A content hash in the query makes a changed icon a new URL.
async function versioned(url) {
  const bytes = await readFile(path.join(root, 'dist', url));
  return `${url}?v=${createHash('sha256').update(bytes).digest('hex').slice(0, 8)}`;
}
const icon = '/assets/icon.svg';
const banner = '/assets/banner.png';
const bannerUrl = `https://sprakvask.no${banner}`;

const output = html
  .replace(`href="${icon}"`, `href="${await versioned(icon)}"`)
  // Link previews (Slack, LinkedIn, Facebook) cache the image by URL for a long time.
  .replaceAll(bannerUrl, `https://sprakvask.no${await versioned(banner)}`)
  .replace(cssLink[0], () => `<style>${css}</style>`)
  .replace(marker, () => `<div id="root">${render()}</div>`);

await writeFile(htmlPath, output);
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
