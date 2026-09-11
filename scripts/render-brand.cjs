// Requires sharp (resolve it locally or through NODE_PATH).
const sharp = require('sharp');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
(async () => {
  const asset = name => path.join(root, 'site/public/assets', name);
  await sharp(asset('banner.svg')).png().toFile(asset('banner.png'));
  await sharp(asset('banner.svg'))
    .resize(1200, 630, { fit: 'contain', background: '#e4e4f2' })
    .png().toFile(asset('og-image.png'));
})().catch(error => { console.error(error); process.exitCode = 1; });
