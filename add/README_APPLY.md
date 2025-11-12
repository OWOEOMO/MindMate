# How to apply this delta to your repo

> Keep your existing style. Only add the new sections & minimal CSS/JS.

## 1) Add two new nav links (optional but recommended)
Open `index.html`, find your `<nav>` with anchor items, and insert the following two lines **inside the nav**:
```
<a href="#campus">Campus Summary</a>
<a href="#linguistics">Linguistic Analysis</a>
```

## 2) Paste the new sections
In `index.html`, locate the closing `</main>` and paste the content of `snippets/index_additions.html` **right before** `</main>`.

## 3) Append CSS
Open `styles.css` and append the content of `snippets/styles_additions.css` to the end of the file.

## 4) Append JS
Open `script.js` and append the content of `snippets/script_additions.js` to the end of the file.

## 5) Add UI images
Copy `assets/UI_1.png` and `assets/UI_2.png` into your repo at `assets/UI_1.png` and `assets/UI_2.png` respectively.

## 6) Commit
```
git add index.html styles.css script.js assets/UI_1.png assets/UI_2.png
git commit -m "feat: Campus Summary + Linguistic Analysis sections and UI gallery"
git push
```

> If you’d like me to produce a PR patch against your current main branch, I can generate a unified diff after pulling your latest files.
