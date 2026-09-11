# RU ⇄ EN Word Cycler

A small, self-contained vocabulary roulette that runs entirely in your browser (no
server, no install). It draws a random subset of Russian words, numbers them, then
rolls through them indefinitely — showing each word with its English equivalent —
until you request a new selection.

## Run it

Double-click `index.html` (or drag it into a browser). That's it.

## How it works

- **New Selection** — picks a random, non-repeating subset of Russian words (5 / 10 / 15 / 20).
- **Roller** — an RNG keeps rolling the chosen words forever, each roll flipping to a random
  word number and its translation.
- **Direction** — flip between *RU → EN* and *EN → RU*.
- **Speed** — control the time between rolls.
- **Show translation** — toggle off to test yourself before the answer is revealed.

## Adding / editing words

Open `words.js` and add lines in this format (one per line):

```
россия,Russia
```

The app reads and parses the list automatically — just reload the page.
