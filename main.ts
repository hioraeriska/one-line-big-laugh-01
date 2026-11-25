// One Line, Big Laugh — writes a single funny line to /output/entry.txt.
// The line is a fixed, hand-written joke: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a standing desk to get healthier; now I just stand here hunched over it, like a flamingo with a deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
