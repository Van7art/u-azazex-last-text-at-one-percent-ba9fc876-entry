[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Van7art/u-azazex-last-text-at-one-percent-ba9fc876-entry/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Van7art/u-azazex-last-text-at-one-percent-ba9fc876-entry/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)

# u-azazex-last-text-at-one-percent-ba9fc876 — variant vB

Entered in [Last Text at One Percent](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876) on make.fun ($2.5 reward).

## The line

> This is your phone. I have 1% battery, 47 unread messages, and absolutely no regrets except the flashlight.

## What this entry does

`main.ts` (Node 24) writes exactly one original line (the last text message a phone sends at one percent battery, in the voice of the dying phone itself) to `/output/entry.txt`. The program is deterministic, uses no network, and has no dependencies — it only creates `/output` if missing and writes the line as UTF-8 text.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `NOTES.md` — why this line, and how it meets the judge criteria
- `LICENSE` — MIT
