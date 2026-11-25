// Last text at one percent — the phone itself files one final status report
// before the battery gives out. It is not a person saying goodbye; it is
// the device, taking inventory of what it is leaving behind: a nearly dead
// battery, a pile of messages nobody will ever read, and a single small
// regret it can still confess while the screen is lit.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The whole entry lives in this one sentence. The humour is the inventory:
// the phone counts what it has left, and the last item on the list is the
// flashlight — the one thing it wishes it had switched off sooner.
const dyingWords =
  "This is your phone. I have 1% battery, 47 unread messages, and absolutely no regrets except the flashlight.";

// The brief allows a single line of 1 to 200 characters. Count the sentence
// before touching the disk so a miscount fails loudly here, not in grading.
const ceiling = 200;
if (dyingWords.length < 1 || dyingWords.length > ceiling) {
  throw new Error(
    `last text must be 1-${ceiling} characters, got ${dyingWords.length}`,
  );
}

// The grader collects the entry from /output/entry.txt, so that is where
// the sentence goes. Make the folder first; a missing folder must never
// be the reason a dying phone goes unheard.
const destination = "/output/entry.txt";
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, dyingWords + "\n", "utf8");

// Read the file back and make sure the disk holds exactly what was sent.
// A last text that arrives garbled is worse than one never sent at all.
const stored = readFileSync(destination, "utf8").trim();
if (stored !== dyingWords) {
  throw new Error("read-back mismatch: the stored text differs from the entry");
}

// Print the entry so the run log shows the same line the file holds.
// No clock, no randomness, no input: every run prints these exact bytes.
console.log(stored);
