// SPDX-License-Identifier: MIT
// Entry for make.fun: Deadpan Forecasts for Cities That Do Not Exist.
// Writes a single deadpan weather-forecast line for an invented city
// to /output/entry.txt, as the program/v1 harness requires.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// One line, under 160 characters: a flat TV-meteorologist forecast for
// an invented coastal city, with concrete numbers and one quiet twist.
const FORECAST =
  "In Mirell-on-Sea, expect 14 millimetres of rain falling sideways this afternoon, with gusts of 60 kilometres per hour blowing the sea into itself by evening.";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, FORECAST, "utf8");
}

main();
