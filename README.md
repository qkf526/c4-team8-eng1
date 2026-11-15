# GOOSEAGEDDON — Team 8, Cohort 4 | ENG1 Website

This is the static **GitHub Pages** website for the team's ENG1 Assessment 1 game, including the architecture design history, six Gantt charts and eight tracker screenshots. The existing website styling is preserved.

## What's included

- `index.html` — home, team information, deliverables and resource links.
- `architecture.html` — four dated UML design iterations, two early behavioural diagrams and four final diagrams.
- `planning.html` — Gantt charts for Weeks 2–7 and eight workstream activity tracker screenshots.
- `credits.html` — on-page library, asset and sound attribution summary. **There is no separate sound-register download link.**
- `config.js` — report, game, repository and design-board link settings.

## Assessment PDFs — included and linked

The following five assessed PDFs have been included in the `documents/` folder, and their cards on the homepage are active:

| Report | Relative URL |
|---|---|
| Requirements | `documents/Req1.pdf` |
| Architecture | `documents/Arch1.pdf` |
| Method Selection and Planning | `documents/Plan1.pdf` |
| Risk Management | `documents/Risk1.pdf` |
| Implementation | `documents/Impl1.pdf` |

The **original rough design board** opens from the Architecture & Design History page at:
https://docs.google.com/document/d/1ppu9bTNcR3OrPPNv8m8it_WAsVCL1ymvdmR1tac-c_M/edit?usp=sharing

The executable JAR is available under **Assets** in the published v1.0.0 GitHub Release. The source code link points to the Java game repository. The sound-attribution register has no separate website download link, while the Credits page retains its on-page acknowledgements.

**The five assessed PDFs must still be included in the official assessment submission ZIP separately from this website source ZIP.**

## Pending software links

`game` in `config.js` points to the v1.0.0 GitHub Release page, where visitors download `GoosePatrolGame-1.0.0.jar` from **Assets**. `repository` points to the Java game source repository.

- Release: https://github.com/qkf526/Goose-Patrol-Game/releases/tag/v1.0.0
- Source: https://github.com/qkf526/Goose-Patrol-Game

## Planning evidence

The site includes six `evidence/planning/weekN-gantt.png` images for Weeks 2–7, plus eight separate workstream tracker images. The tracker images are grouped by workstream, not represented as weekly snapshots. See `planning.html` for details.

## Publish on GitHub Pages

1. Unzip the website package and upload its **contents** (not the enclosing folder) to the root of the GitHub Pages publishing branch for `qkf526/c4-team8-eng1`.
2. All five final PDFs are already included; no further document-link configuration is required.
3. Deploy all website files including the `documents/` folder; then open every report card and evidence-gallery image at `https://qkf526.github.io/c4-team8-eng1/`.
4. Test using an incognito window to ensure all resources are publicly accessible.
5. Verify that the Get the game and Repository buttons open the published release and source repository, respectively. Confirm Google Docs sharing allows people with the link to view the rough design board.

`url1.txt` retains the website URL for the assessment submission.

## Homepage layout update

The hero title `GOOSEAGEDDON.` now stays on one line at all responsive widths. The desktop hero gives extra width to its text column and uses a fluid title size instead of the previous oversized two-line heading, avoiding an excessively tall/narrow layout on large desktop displays.
