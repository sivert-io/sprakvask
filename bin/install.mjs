#!/usr/bin/env node
/**
 * Legger reglene der agenten din leter etter dem.
 *
 * Uten argumenter ser den etter hvilke agenter prosjektet allerede bruker og
 * skriver til dem. Finner den ingen, faller den tilbake på `AGENTS.md`, som er
 * det nærmeste noe felles standard.
 *
 * Kopierer framfor å lenke. En symlink inn i `node_modules` peker ingen steder
 * den dagen noen kjører `npm ci`, og da forsvinner reglene uten et ord.
 */
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { END, START, TARGETS } from "./targets.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const skillDir = path.join(here, "..", "skills", "sprakvask");

const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith("-")));
const named = argv.filter((a) => !a.startsWith("-"));

if (flags.has("--help") || flags.has("-h")) {
  console.log(`
  sprakvask – norsk språkvask for kodeagenter

    npx sprakvask                 finner agentene prosjektet bruker
    npx sprakvask --all           skriver til alle støttede
    npx sprakvask cursor claude   bare disse
    npx sprakvask --global        Claude Code, for alle prosjekter
    npx sprakvask --list          viser hva som støttes
    npx sprakvask --remove        fjerner det som er lagt inn

  Støttet: ${TARGETS.map((t) => t.id).join(", ")}
`);
  process.exit(0);
}

if (flags.has("--list")) {
  console.log();
  for (const t of TARGETS) console.log(`  ${t.id.padEnd(10)} ${t.name}\n  ${" ".repeat(10)} ${t.path}\n`);
  process.exit(0);
}

/*
  Sjekkene, klippet ut av selve ferdigheten.

  Agentene som leser én fil får ikke referansemappen, så de får kjernen – men
  den hentes herfra i stedet for å skrives av. To kopier av de samme reglene er
  to steder å rette den samme feilen, og den ene ville blitt glemt.

  Lenkene til referansefilene peker derfor til GitHub, der filene finnes.
*/
const REFERENCES_URL = "https://github.com/sivert-io/sprakvask/blob/main/skills/sprakvask/references/";

async function rulesText() {
  const skill = await readFile(path.join(skillDir, "SKILL.md"), "utf8");
  const from = skill.indexOf("## Sjekkene");
  const to = skill.indexOf("## Etter sjekkene");
  if (from < 0 || to < from) {
    throw new Error("Fant ikke «## Sjekkene» og «## Etter sjekkene» i SKILL.md.");
  }
  const core = skill
    .slice(from, to)
    .trim()
    .replace(/\n-{3,}$/, "")
    .replace(/\]\(references\//g, `](${REFERENCES_URL}`);

  return [
    "# Språkvask – norsk språkvask etter Språkrådets normer",
    "",
    "Gjelder all norsk tekst du skriver eller retter: grensesnitt, e-post,",
    "dokumentasjon, commit-meldinger, vilkår. Gjelder **ikke** kode,",
    "variabelnavn eller API-felt – `wantsFutureInvitations` skal ikke oversettes.",
    "",
    core,
    "",
    "---",
    "",
    "Fullstendige regler, inkludert nynorsk og klarspråk:",
    "https://github.com/sivert-io/sprakvask",
  ].join("\n");
}

/** Skriver et avmerket avsnitt inn i en fil brukeren eier, uten å røre resten. */
function withSection(existing, body) {
  const block = `${START}\n${body}\n${END}`;
  if (existing.includes(START) && existing.includes(END)) {
    const before = existing.slice(0, existing.indexOf(START));
    const after = existing.slice(existing.indexOf(END) + END.length);
    return `${before}${block}${after}`;
  }
  const base = existing.trimEnd();
  return base ? `${base}\n\n${block}\n` : `${block}\n`;
}

function stripSection(existing) {
  if (!existing.includes(START) || !existing.includes(END)) return existing;
  const before = existing.slice(0, existing.indexOf(START)).trimEnd();
  const after = existing.slice(existing.indexOf(END) + END.length).trimStart();
  return [before, after].filter(Boolean).join("\n\n") + "\n";
}

const root = flags.has("--global") || flags.has("-g") ? homedir() : process.cwd();

/** Hvilke agenter dette prosjektet allerede bruker. */
function detect() {
  return TARGETS.filter((t) => t.detect.some((d) => existsSync(path.join(root, d))));
}

let chosen;
if (named.length > 0) {
  chosen = TARGETS.filter((t) => named.includes(t.id));
  const unknown = named.filter((n) => !TARGETS.some((t) => t.id === n));
  if (unknown.length > 0) {
    console.error(`\n  Kjenner ikke: ${unknown.join(", ")}\n  Prøv: npx sprakvask --list\n`);
    process.exit(1);
  }
} else if (flags.has("--all")) {
  chosen = TARGETS;
} else if (flags.has("--global")) {
  chosen = TARGETS.filter((t) => t.id === "claude");
} else {
  chosen = detect();
  if (chosen.length === 0) {
    // Ingenting å gå etter. AGENTS.md er den flest kan lese.
    chosen = TARGETS.filter((t) => t.id === "agents");
  }
}

const removing = flags.has("--remove");
const body = removing ? "" : await rulesText();
const done = [];

for (const target of chosen) {
  const full = path.join(root, target.path);

  if (target.kind === "skill") {
    if (removing) {
      if (existsSync(full)) await rm(full, { recursive: true, force: true });
    } else {
      await mkdir(path.dirname(full), { recursive: true });
      await rm(full, { recursive: true, force: true });
      await cp(skillDir, full, { recursive: true });
    }
  } else if (target.kind === "file") {
    if (removing) {
      if (existsSync(full)) await rm(full, { force: true });
    } else {
      await mkdir(path.dirname(full), { recursive: true });
      await writeFile(full, (target.frontmatter ?? "") + body + "\n");
    }
  } else {
    // En fil brukeren eier. Bare vårt eget avsnitt røres.
    const existing = existsSync(full) ? await readFile(full, "utf8") : "";
    if (removing) {
      if (!existing) continue;
      await writeFile(full, stripSection(existing));
    } else {
      await mkdir(path.dirname(full), { recursive: true });
      await writeFile(full, withSection(existing, body));
    }
  }

  done.push(target);
}

const version = JSON.parse(await readFile(path.join(here, "..", "package.json"), "utf8")).version;

console.log();
if (done.length === 0) {
  console.log("  Ingenting å gjøre.");
} else {
  console.log(`  Språkvask ${version} ${removing ? "fjernet fra" : "lagt inn for"}:`);
  for (const t of done) console.log(`    ${t.name.padEnd(42)} ${t.path}`);
  if (!removing) console.log("\n  Start agenten på nytt, så plukker den det opp.");
}
console.log();
