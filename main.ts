// One Line, Big Laugh — writes a single funny line to /output/entry.txt.
// The line is a fixed, hand-written joke: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a standing desk to get healthier; now I just stand here hunched over it, like a flamingo with a deadline.";

// The gate only accepts 1-200 characters of non-whitespace text, so refuse
// to write anything that would score 0 instead of failing loudly.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
