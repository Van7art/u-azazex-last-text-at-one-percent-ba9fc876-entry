// u-azazex-last-text-at-one-percent-ba9fc876 — variant vB
// Writes exactly one original line (the last text message a phone sends at one percent battery, in the voice of the dying phone itself) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: the phone takes inventory before it dies.
// Forty-seven unread, one flashlight regret, no apologies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This is your phone. I have 1% battery, 47 unread messages, and absolutely no regrets except the flashlight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
