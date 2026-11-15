# GOOSEAGEDDON — Team 8, Cohort 4 | ENG1 Website

This is the updated **GitHub Pages** website for the team's ENG1 Assessment 1 game. It preserves the existing visual design and incorporates the supplied final architecture diagrams, six weekly Gantt charts, and eight activity tracker screenshots.

## What is already included

- Home page with Team 8 / Cohort 4 branding and five assessment-document cards
- `architecture.html`: four dated class-diagram iterations, two early behavioural diagrams, four final diagrams (10 image files)
- `planning.html`: six full-resolution weekly Gantt charts, one for Weeks 2–7, and a separate gallery of eight workstream tracker screenshots
- `credits.html`: attribution summary with a link slot for the team's complete sound register
- `config.js`: one place to configure all external Google Drive and source/JAR links

## Link Google Drive documents

**Assessed PDFs are linked from Google Drive; do not copy them into this website ZIP.** In `config.js` replace the empty strings for:

| `config.js` key | File or document | Destination |
| --- | --- | --- |
| `requirements` | `Req1.pdf` | Google Drive viewer URL |
| `architecture` | `Arch1.pdf` | Google Drive viewer URL |
| `planning` | `Plan1.pdf` | Google Drive viewer URL |
| `risk` | `Risk1.pdf` | Google Drive viewer URL |
| `implementation` | `Impl1.pdf` | Google Drive viewer URL |
| `designBoard` | Game Design Board | Google Drive viewer URL |
| `soundRegister` | Sound attribution register | Google Drive viewer URL |

Example, after you've obtained the real URL from Google Drive:

```js
requirements: "https://drive.google.com/file/d/REAL_FILE_ID/view?usp=sharing",
```

The `REAL_FILE_ID` text is illustrative only, **not a working URL**. The page intentionally displays **Google Drive link pending** until a real URL is entered.

For each Google Drive file: click **Share → General access → Anyone with the link → Viewer**, copy the link, and confirm that an anonymous/incognito visitor can open it. Follow your institution's rules for sharing material. The public viewer link remains necessary even if a file is already visible to your team when signed in.

## Game and source-code links (not ready yet)

`game` and `repository` in `config.js` remain blank, so those buttons are disabled rather than sending users to broken URLs. Fill them in only after your desktop executable JAR and source repository are available and tested.

## Planning evidence structure

- `evidence/planning/week2-gantt.png` to `week7-gantt.png`: six Gantt chart images supplied by the team. These are retrospective reconstructions of weekly planning schedules.
- `evidence/planning/overall-tracker.png`, `game-control-tracker.png`, `player-tracker.png`, `geese-tracker.png`, `items-tracker.png`, `events-tracker.png`, `screens-tracker.png`, `qa-tracker.png`: the eight uploaded Google Sheets screenshots. **These are workstream trackers, not one tracker for each week.**

Every chart and tracker opens in full resolution when clicked.

## Publish updates on GitHub Pages

1. Unzip the archive.
2. Upload its **contents** to the root of the GitHub Pages publishing branch for `qkf526/c4-team8-eng1`.
3. Verify that the site loads at `https://qkf526.github.io/c4-team8-eng1/`.
4. Open `planning.html`, `architecture.html`, and `credits.html` and click sample gallery images.
5. After updating `config.js` with each real Google Drive link, reload the page and test the document cards in an incognito browser window.
6. Add the final `game` and `repository` links once the release is ready.

No build step or server is required; this website uses static HTML, CSS and JavaScript.

`url1.txt` retains the website URL for submission. Do not confuse website publication with creating/submitting the final project source and executable JAR.
