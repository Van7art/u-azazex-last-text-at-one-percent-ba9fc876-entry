// u-azazex-last-text-at-one-percent-ba9fc876 — variant vA
// Writes exactly one original line (the last text message a phone sends at one percent battery, in the voice of the dying phone itself) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: one percent left, and the charger too far away.
// A group-chat goodbye with the plug out of reach.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "1% left. Tell the group chat I loved them. Tell the charger... it was always too far away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
