/**
 * Hvor de ulike agentene leter etter regler.
 *
 * Det finnes ingen felles standard. `SKILL.md` under `.claude/skills/` er
 * Claude Codes, og hver av de andre har sin egen – som regel én markdown-fil
 * på en avtalt sti. Innholdet er den samme prosaen uansett; det er bare stien
 * og frontmatteren som skiller.
 *
 * `AGENTS.md` er det nærmeste vi har en felles standard: flere leverandører har
 * blitt enige om den, og derfor installeres den først når ingenting annet er
 * oppdaget.
 *
 * Filene som er *delte* – AGENTS.md, copilot-instructions.md, .rules,
 * CONVENTIONS.md – tilhører brukeren og kan ha innhold fra før. Der skrives det
 * inn et avmerket avsnitt som kan oppdateres og fjernes igjen uten å røre
 * resten. Å overskrive en fil noen andre eier, er den ene feilen et
 * installasjonsskript ikke får lov til å gjøre.
 */
export const START = "<!-- sprakvask:start -->";
export const END = "<!-- sprakvask:end -->";

export const TARGETS = [
  {
    id: "claude",
    name: "Claude Code",
    kind: "skill",
    path: ".claude/skills/sprakvask",
    // Den eneste som får hele ferdigheten med referansefiler. De andre leser
    // én fil, så de får sjekkene og lenker til resten.
    detect: [".claude"],
  },
  {
    id: "agents",
    name: "AGENTS.md (Codex, Jules, Factory, Amp mfl.)",
    kind: "section",
    path: "AGENTS.md",
    detect: ["AGENTS.md"],
  },
  {
    id: "cursor",
    name: "Cursor",
    kind: "file",
    path: ".cursor/rules/sprakvask.mdc",
    detect: [".cursor"],
    frontmatter: [
      "---",
      "description: Norsk språkvask etter Språkrådets normer",
      "globs:",
      "alwaysApply: true",
      "---",
      "",
    ].join("\n"),
  },
  {
    id: "windsurf",
    name: "Windsurf",
    kind: "file",
    path: ".windsurf/rules/sprakvask.md",
    detect: [".windsurf", ".windsurfrules"],
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    kind: "section",
    path: ".github/copilot-instructions.md",
    detect: [".github/copilot-instructions.md"],
  },
  {
    id: "cline",
    name: "Cline",
    kind: "file",
    path: ".clinerules/sprakvask.md",
    detect: [".clinerules"],
  },
  {
    id: "zed",
    name: "Zed",
    kind: "section",
    path: ".rules",
    detect: [".rules"],
  },
  {
    id: "aider",
    name: "Aider",
    kind: "section",
    path: "CONVENTIONS.md",
    detect: ["CONVENTIONS.md"],
  },
];
