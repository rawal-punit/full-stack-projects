# Copilot / AI Agent Instructions for 13_slider ⚡

## Project overview
- Small JavaScript practice project that implements an image slider using plain DOM APIs.
- No build system, tests, or package manager present — just static files: `index.html` and `script.js`.

## Big picture (what to know quickly) 🔍
- `index.html` contains three controls: `#prev` (Previous), `#img` (image element), and `#next` (Next).
- `script.js` contains the entire behavior: a simple `images` map, a `keys` array, an `index` counter, and three functions: `showImage()`, `nextImage()`, `prevImage()`.
- Images are loaded from external URLs (`https://picsum.photos/...`) so an Internet connection is required to see images.

## Developer workflows (how to run/debug) 🧰
- No build step. Open `index.html` in a browser or use a Live Server extension to serve the file and test changes.
- Use browser DevTools to debug: set breakpoints in `script.js` or inspect DOM elements (`#prev`, `#next`, `#img`).
- For quick manual tests: verify clicking `Next` cycles forward, clicking `Previous` cycles backward, and the first image loads on page load.

## Conventions & patterns in this repo 📐
- Plain ES5/ES6 JavaScript without modules or bundlers.
- DOM selection via `document.getElementById` and direct assignment to `.onclick` handlers (e.g., `document.getElementById("next").onclick = nextImage;`).
- Mutable global variables (e.g., `let images`, `let index`) hold slider state.
- Minimal HTML — for any added UI be consistent with simple, semantic elements and keep styles inline or in a small CSS file if added.

## Integration points & external dependencies 🔗
- External image service: `picsum.photos` (used directly in `images` object). Changes to these URLs affect visual output only.

## Risks & important notes ⚠️
- The `img` element currently has no `alt` attribute — accessibility improvement candidate.
- Global state makes incremental refactors riskier; prefer introducing a small module/IIFE if you need to expand behavior.
- No tests or CI were found in the directory; assume manual testing is the primary verification method.

## Actionable instructions for an AI agent (concise) ✅
- When changing behavior, run the app by opening `index.html` in a browser and verify the three behaviors: initial render, Next cycles, Prev cycles.
- Prefer non-breaking, small commits (modify `script.js` or `index.html` only), and include a short description of the change and how you tested it.
- When refactoring, keep behavior identical and add minimal unit tests only if you introduce a test harness and document how to run them.

## Helpful file references (examples) 📌
- `index.html` — DOM structure and element IDs (`#prev`, `#img`, `#next`).
- `script.js` — `images`, `keys`, `index`, `showImage`, `nextImage`, `prevImage`, and the event hookup at the bottom of the file.

---

If anything above is unclear or you'd like more detail (test suggestions, accessibility checklist, or a suggested small refactor), tell me which section to expand and I'll update this file. ✍️