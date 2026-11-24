// One Word From Grandma — a make.fun bounty entry.
//
// The scene: you explained ChatGPT to your grandma exactly once,
// over the phone. She never saw the name written down. She only
// heard it. Later she texts the family chat about "the AI", and
// the word that arrives is the name of the thing spelled the way
// it sounded to her:
//
//   geepeetee
//
// One word. This program writes that word, and nothing else, to
// /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "geepeetee";

// The gate, checked before anything is written: the entry must be
// exactly one word — 1 to 30 characters, no whitespace anywhere —
// or it is never judged at all.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(
    `entry must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
