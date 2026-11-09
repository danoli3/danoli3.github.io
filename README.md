# Dan Rosser / danoli3

Developer portfolio at **https://danoli3.github.io/**. Static HTML, CSS and a small progressive-enhancement script; no build step or package installation.

## Preview

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.

## Edit content

- `index.html`: introduction, games, selected repositories, research and publications, older projects and contact links.
- `cv.html`: selected experience, with print styles. The print button opens the browser's print dialog, where visitors can save a PDF.
- `styles.css`: responsive layout, colours, typography and print styles.
- `script.js`: repository filtering, print button and footer year. Content and links work without JavaScript.
- `assets/`: local game cover images and site graphics. Game artwork remains the property of its respective owners.

GitHub Pages serves the root of the `main` branch. `.nojekyll` keeps the site buildless. Push updates to `main` to publish them.

## Content sources

The page combines public project descriptions and credits with owner-provided 2026 CVs. Career history, professional roles, education and awards were expanded from those supplied documents. Years are used where the CV versions differ on individual start or end months. Home addresses, phone numbers and referee contact information are excluded from the public site; source documents are not stored in the repository.

- [GitHub profile](https://github.com/danoli3): name, location, engineering focus, previous studios and UTS background.
- [Super Hexagon iOS development, 2015](https://distractionware.com/blog/2015/11/super-hexagon-update-on-iphone/) and [Android update, 2021](https://distractionware.com/blog/2021/12/super-hexagon-is-back-on-android/): Terry Cavanagh's development posts crediting Dan's work.
- [Rumu credits](https://www.mobygames.com/game/99711/rumu/credits/windows/): published Senior Game Programmer credit; Dan's supplied CVs identify his lead programming responsibilities.
- [One4Seven profile](https://bandcamp.com/one4seven): self-reported work on Death Squared. Specific contribution and dates should be expanded with Dan's own details.
- [LinkedIn](https://au.linkedin.com/in/dan-rosser-31b37926): Freddy's Pass Off and CopyMe project descriptions.
- [BeFaced publication](https://opus.lib.uts.edu.au/handle/10453/41917): research authorship.
- [Australian War Memorial project](https://www.holly.co.nz/work/australian-war-memorial-first-world-war-galleries-redevelopment-awm-tablets): interactive developer credit.
- Repository descriptions linked directly from each open-source entry.
- Game covers from each game's official Steam store assets: Super Hexagon (221640), Rumu (723270), Death Squared (471810).

Fast & Furious Takedown is featured with Dan's directly supplied **Lead Game Developer** credit. The [official launch trailer from The Fast Saga](https://www.youtube.com/watch?v=sXooOX17FNs) supplies the video link and local thumbnail; [Sprung Studios' project page](https://www.sprungstudios.com/fastfurious-takedown/) corroborates the SMG Studio / Universal project. The displayed year is the game's 2018 release, not a claimed employment period.

## Publications and research citations

The research section lists 10 co-authored conference/workshop publications from 2012–2014. Three are featured and seven are in a native HTML disclosure. `assets/publications.bib` contains all 10 records for citation managers. Publication years describe the papers, not employment dates.

Metadata was checked on 10 November 2026 against publisher-deposited [Crossref records](https://api.crossref.org/works?filter=prefix:10.1145&query.author=Daniel%20Rosser&rows=20), the [SIGGRAPH Asia programme](https://sa2013.siggraph.org/en/attendees/technical-briefs/session/briefs/58.html), [UTS Games Studio](https://www.gamesstudio.org/publication/copyme-portable-real-time-feedback-expression-recognition-game-children), and the two FDG 2014 papers linked in the bibliography. Full subtitles are retained; some Crossref records shorten titles to CopyMe or BeFaced.

Verified later citations:

- [The Meme Quiz (Tuite & Kemelmacher, FDG 2015)](https://grail.cs.washington.edu/wp-content/uploads/2015/08/tuite2015tmq.pdf), section 3 and reference 22: discusses BeFaced and cites *A game to crowdsource data for affective computing* (2014).
- [Corneanu et al., IEEE TPAMI (2016)](https://doi.org/10.1109/TPAMI.2016.2515606), reference 46: cites the 2012 player-experience feasibility study. [Author copy](https://cipriancorneanu.github.io/files/corneanu2016survey.pdf).
- [De Belen et al., Translational Psychiatry (2020)](https://doi.org/10.1038/s41398-020-01015-w), references 54–55: cites the two CHI 2014 CopyMe papers.

The section describes the intended machine-learning data collection role of BeFaced, Dan's own OpenCV/model-training work as described in his CVs, and documented citation relationships. It does not claim that a named later model was trained on the dataset. No citation totals are displayed because coverage varies by index and changes over time.
