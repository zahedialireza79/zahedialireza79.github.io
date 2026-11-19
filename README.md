# Alireza Zahedi — Robotics Portfolio

Static portfolio site with robotics project case studies and downloadable CAD models. The homepage is `index.html`; project pages live in `projects/`. The site is hosted with GitHub Pages at the domain in `CNAME`.

## Local preview

Open `index.html` in a browser or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Editing

Edit the HTML pages directly. The deployed CSS is `css/style.css`; Sass source is under `sass/`. The legacy `node-sass` build uses Node tooling from `package.json` and may require an older Node version. If changing Sass, rebuild CSS before committing.

CAD downloads and generated SVG previews live in `assets/cad/`. Each gallery card links to the formats available for that model. Video files are in `assets/`; use compressed, web friendly exports to keep project pages fast.

## Credits

Based on the [Dopefolio](https://github.com/rammcodes/dopefolio) template, licensed under GPL-3.0. See `LICENSE`.
