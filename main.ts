// Make the AI Judge Laugh: the Office Joke Open — make.fun entry (program/v1, Node 22+).
// Writes one line of office comedy, at most 200 characters, to
// /output/entry.txt. Deterministic, no network, no model calls.
// The line is a fixed constant chosen by the author.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a reply-all thread that only stops when someone commits
// the very sin they are protesting — the punchline lands in the last words.
const ENTRY =
  "The reply-all thread swallowed 47 people before someone finally wrote 'please stop replying all' — to all.";

// Gate guard: the sealed scorer only accepts 1–200 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1–200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
