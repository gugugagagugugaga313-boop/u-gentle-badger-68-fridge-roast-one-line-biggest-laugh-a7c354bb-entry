import { mkdirSync, writeFileSync } from "node:fs";

// One fixed line, no randomness and no network, so every run is identical.
const line =
  "My fridge's ice maker produces one cube an hour, like it's hand-crafting artisanal ice for a bar I'll never open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
