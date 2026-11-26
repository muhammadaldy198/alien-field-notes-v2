// Alien Field Notes: The Two-Day Earth Review — rebuild #2 (rombak total)
// Entry: one-line alien tourist review of Earth, max 200 chars (gate: 1-200).
// Pick: toilet/flush ritual — the one domestic Earth ritual the field left empty.
// Deterministic: no network, no random, no time. Writes entry.txt + chmod 0o644.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Four stars. The locals sit on a porcelain throne, press a lever, and drinking water carries it all away. I pressed it eleven times. It has not thanked me yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${ENTRY.length} chars)`);
