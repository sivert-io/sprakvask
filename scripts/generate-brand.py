"""Generate portable brand SVGs from the React site's local fonts (requires fontTools, hb-shape and the site Node dependencies)."""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import subprocess
import json

ROOT = Path(__file__).resolve().parents[1]
FONTS = ROOT / 'site/public/fonts'

def outlines(text, filename, size, tracking=0, optical=None):
    font = TTFont(FONTS / filename)
    if 'fvar' in font:
        axes = {'wght': 400, 'opsz': optical or size * .75}
        font = instantiateVariableFont(font, axes, inplace=True)
    glyphs = font.getGlyphSet()
    scale = size / font['head'].unitsPerEm
    # Use the same OpenType shaping as browsers, including kerning.
    command = ['hb-shape', str(FONTS / filename), text, '--output-format=json']
    if 'fvar' in TTFont(FONTS / filename):
        command.append(f'--variations=wght=400,opsz={optical or size * .75}')
    shaped = json.loads(subprocess.check_output(command, text=True))
    x, paths = 0, []
    for glyph in shaped:
        pen = SVGPathPen(glyphs)
        glyphs[glyph['g']].draw(TransformPen(pen, (
            scale, 0, 0, -scale, x + glyph['dx'] * scale, size - glyph['dy'] * scale,
        )))
        paths.append(pen.getCommands())
        x += glyph['ax'] * scale + tracking * size
    return ''.join(paths), x - tracking * size

word, width = outlines('Språkvask', 'Fraunces.ttf', 112, -.045)
ink, light = '#1f1b24', '#fbfcfd'
colors = ['#597fb1', '#6d8fb9', '#aec7e2']

def mark(path, w, h, fill):
    waves = ''
    for y, amp, color in zip([.55, .62, .68], [.12, .08, .06], colors):
        base = h*y
        waves += f'<path fill="{color}" d="M0 {base} C{w*.2} {base-h*amp} {w*.3} {base+h*amp} {w*.5} {base} S{w*.8} {base-h*amp} {w} {base} V{h*2} H0Z"/>'
    return f'<defs><path id="letters" d="{path}"/><clipPath id="clip"><use href="#letters"/></clipPath></defs><use href="#letters" fill="{fill}"/><g clip-path="url(#clip)">{waves}</g>'

def svg(w, h, body, title='Språkvask'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{title}">{body}</svg>\n'

out = ROOT/'site/public/assets'
for name, color in [('logo',light), ('logo-light',ink)]:
    (out/f'{name}.svg').write_text(svg(round(width+24,2),148,f'<g transform="translate(12 0)">{mark(word,width,129,color)}</g>'))
s, sw = outlines('S','Fraunces.ttf',88, optical=84)
(out/'icon.svg').write_text(svg(128,128,f'<rect width="128" height="128" rx="24" fill="{light}"/><g transform="translate({(128-sw)/2} 12)">{mark(s,sw,101,ink)}</g>'))
bold, bw = outlines('Norsk grammatikk ', 'dm-sans/DMSans-Bold.ttf', 32)
regular, rw = outlines('for kodeagenter ', 'dm-sans/DMSans-Regular.ttf', 32)
# Render the actual Phosphor component used by Hero.tsx.
robot = subprocess.check_output(['node', '-e', f"""
const React = require('./site/node_modules/react');
const {{ renderToStaticMarkup }} = require('./site/node_modules/react-dom/server');
const {{ Robot }} = require('./site/node_modules/phosphor-react');
process.stdout.write(renderToStaticMarkup(React.createElement(Robot, {{
  weight: 'regular', size: 32, color: '{ink}'
}})));
"""], cwd=ROOT, text=True).strip()
tw = bw + rw + 32
subtitle = f'<path d="{bold}"/><path transform="translate({bw} 0)" d="{regular}"/><g transform="translate({bw+rw} 8)">{robot}</g>'
scale = 960/width
banner = f'<defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#d4d4e4" stroke-width=".6"/></pattern></defs><rect width="1280" height="640" fill="#e4e4f2"/><rect width="1280" height="640" fill="url(#grid)"/><rect x="32" y="32" width="1216" height="576" rx="12" fill="{light}" stroke="{ink}"/><g transform="translate(160 100) scale({scale})">{mark(word,width,129,ink)}</g><g transform="translate({(1280-tw)/2} 427)" fill="{ink}">{subtitle}</g>'
(out/'banner.svg').write_text(svg(1280,640,banner,'Språkvask – norsk grammatikk for kodeagenter'))
print('Generated Fraunces/DM Sans SVG assets')
