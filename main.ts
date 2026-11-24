import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji: a desert island — the faraway escape, a postcard in one glyph.
const EMOJI = "🏝️";

const codePoints = [...EMOJI].length;
if (codePoints < 1 || codePoints > 8) {
  throw new Error(`EMOJI must be 1-8 Unicode code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
