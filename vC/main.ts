// u-azazex-last-text-at-one-percent-ba9fc876 — variant vC
// Writes exactly one original line (the last text message a phone sends at one percent battery, in the voice of the dying phone itself) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: the sentence dies before the thought does.
// Cut off mid-word, exactly where the battery gave out.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Battery at 1%. If I die mid-sentence, know that I was about to say something really impor";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
