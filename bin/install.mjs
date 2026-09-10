#!/usr/bin/env node
/**
 * Legger ferdigheten der agenten leter etter den.
 *
 * Som standard i prosjektet du står i (`.claude/skills/`), fordi en språknorm
 * hører til teksten den vasker: et norsk prosjekt vil ha den, et engelsk vil
 * ikke. `--global` legger den i `~/.claude/skills/` for alle prosjekter.
 *
 * Kopierer framfor å lenke. En symlink inn i `node_modules` peker ingen steder
 * den dagen noen kjører `npm ci`, og da forsvinner ferdigheten uten et ord.
 */
import { cp, mkdir, rm, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
/*
  Én kopi av ferdigheten, ikke to.

  `skills/sprakvask/` er der markedsplassen i Claude Code venter å finne den, så
  det er den som er kilden – og det er den npm-installasjonen kopierer fra. Et
  eget `skill/`-kart ved siden av ville vært to steder å rette den samme
  skrivefeilen, og det ene ville blitt glemt.
*/
const source = path.join(here, "..", "skills", "sprakvask");

const args = new Set(process.argv.slice(2));
const global = args.has("--global") || args.has("-g");
const root = global ? homedir() : process.cwd();
const target = path.join(root, ".claude", "skills", "sprakvask");

if (args.has("--help") || args.has("-h")) {
  console.log(`
  sprakvask – norsk språkvask som ferdighet

    npx sprakvask             legger den i dette prosjektet (.claude/skills/)
    npx sprakvask --global    legger den i ~/.claude/skills/ for alle prosjekter

  Etterpå: start agenten på nytt, og be den om å vaske teksten.
`);
  process.exit(0);
}

if (!existsSync(source)) {
  console.error("Fant ikke ferdigheten i pakken. Er den installert riktig?");
  process.exit(1);
}

const replacing = existsSync(target);
await mkdir(path.dirname(target), { recursive: true });
if (replacing) await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });

const version = JSON.parse(await readFile(path.join(here, "..", "package.json"), "utf8")).version;
const where = path.relative(process.cwd(), target) || target;

console.log(`
  Språkvask ${version} ${replacing ? "oppdatert" : "lagt"} i ${where}

  Start agenten på nytt, så plukker den den opp.
`);
