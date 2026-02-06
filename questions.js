/*  
===========================================================
 Software Security Exam – Full 100‑Question Bank
 Randomized exam generator for GitHub Pages
===========================================================
*/

import { q1_40 } from "./questions1_40.js";
import { q41_60 } from "./questions41_60.js";
import { q61_80 } from "./questions61_80.js";
import { q81_100 } from "./questions81_100.js";

// Merge all question blocks
const merged = [
  ...q1_40,
  ...q41_60,
  ...q61_80,
  ...q81_100
];

// Pure equal random shuffle
export const questionBank = merged
  .map(q => ({ sort: Math.random(), value: q }))
  .sort((a, b) => a.sort - b.sort)
  .map(obj => obj.value);
