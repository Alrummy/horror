// Writes the competition entry text to entry.txt under $MAKEFUN_OUTPUT_DIR (or /output).
// Plain Node.js JavaScript saved in a .ts file: no TypeScript-only syntax, no dependencies.
const fs = require('fs');
const path = require('path');

// The joke: the countdown hits one at the exact moment the door clicks — whatever spoke was locking the nursery in, not leaving it.
const TEXT = "The baby monitor crackled at 3 a.m. with a voice counting down from ten. It reached one just as the nursery door, which we never open at night, clicked shut from the inside.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), TEXT + '\n');
