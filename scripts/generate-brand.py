"""Generate portable brand SVGs from the full source fonts in site/brand/fonts (requires fontTools and hb-shape)."""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import subprocess
import json

ROOT = Path(__file__).resolve().parents[1]
# Full, unsubsetted fonts. The site serves small woff2 subsets instead.
FONTS = ROOT / 'site/brand/fonts'

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
# The site's stone-and-water palette (site/src/tokens.css), used for the banner.
site_paper, site_sheet, site_edge, site_ink = '#c6cdd1', '#e0e5e7', '#8c9ba3', '#293740'

# Water layers, top to bottom, matching --wave-back/-middle/-front in tokens.css:
# (top of the layer as a share of the letter box, wave height, one wave's length,
#  both in em, colour). The site draws each layer as repeating quadratic waves.
LAYERS = [(.56, .035, 1.5, '#597fb1'), (.63, .028, 2.1, '#6d8fb9'), (.69, .021, 1.2, '#aec7e2')]

def mark(path, w, h, fill, size=112):
    waves = ''
    for y, amp, length, color in LAYERS:
        base, crest, half = h*y, amp*size, length*size/2
        d = f'M0 {base:.2f}'
        x = 0
        while x < w:
            # Alternate crest and trough, like the site's tiled SVG.
            d += f' q{half/2:.2f} {-crest if (x//half) % 2 == 0 else crest:.2f} {half:.2f} 0'
            x += half
        waves += f'<path fill="{color}" d="{d} V{h*2:.2f} H0Z"/>'
    return f'<defs><path id="letters" d="{path}"/><clipPath id="clip"><use href="#letters"/></clipPath></defs><use href="#letters" fill="{fill}"/><g clip-path="url(#clip)">{waves}</g>'

def svg(w, h, body, title='Språkvask'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{title}">{body}</svg>\n'

out = ROOT/'site/public/assets'
for name, color in [('logo',light), ('logo-light',ink)]:
    (out/f'{name}.svg').write_text(svg(round(width+24,2),148,f'<g transform="translate(12 0)">{mark(word,width,129,color)}</g>'))
s, sw = outlines('S','Fraunces.ttf',88, optical=84)
(out/'icon.svg').write_text(svg(128,128,f'<rect width="128" height="128" rx="24" fill="{light}"/><g transform="translate({(128-sw)/2} 12)">{mark(s,sw,101,ink,88)}</g>'))
bold, bw = outlines('Norsk grammatikk ', 'dm-sans/DMSans-Bold.ttf', 32)
regular, rw = outlines('for kodeagenter ', 'dm-sans/DMSans-Regular.ttf', 32)
# Phosphor Robot, regular weight – the same geometry as RobotIcon in site/src/components/icons.tsx.
robot = (f'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" '
         f'stroke="{site_ink}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">'
         '<rect x="32" y="56" width="192" height="160" rx="24"/><rect x="72" y="144" width="112" height="40" rx="20"/>'
         '<line x1="148" y1="144" x2="148" y2="184"/><line x1="108" y1="144" x2="108" y2="184"/>'
         '<line x1="128" y1="56" x2="128" y2="16"/>'
         f'<circle cx="84" cy="108" r="12" fill="{site_ink}" stroke="none"/><circle cx="172" cy="108" r="12" fill="{site_ink}" stroke="none"/></svg>')
tw = bw + rw + 32
subtitle = f'<path d="{bold}"/><path transform="translate({bw} 0)" d="{regular}"/><g transform="translate({bw+rw} 8)">{robot}</g>'
scale = 960/width
# The banner is the site in miniature: flat stone ground, the light sheet, slate ink.
banner = f'<rect width="1280" height="640" fill="{site_paper}"/><rect x="32.5" y="32.5" width="1215" height="575" rx="12" fill="{site_sheet}" stroke="{site_edge}"/><g transform="translate(160 100) scale({scale})">{mark(word,width,129,site_ink)}</g><g transform="translate({(1280-tw)/2} 427)" fill="{site_ink}">{subtitle}</g>'
(out/'banner.svg').write_text(svg(1280,640,banner,'Språkvask – norsk grammatikk for kodeagenter'))
print('Generated Fraunces/DM Sans SVG assets')
