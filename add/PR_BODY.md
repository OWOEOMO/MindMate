# Add cohesive SVG icon set + minimal usage

This PR adds a 24×24 stroke-based SVG icon set under `assets/icons/` and uses **inline-only**, non-breaking enhancements:

## What changed
- **Added 30+ SVGs** (stroke=1.75, round caps/joins) to `assets/icons/`
- **No design overhaul**; all changes are additive and keep current layout/tones
- **New helper CSS** (`.icon-inline`) to align icons in titles/bullets

## Suggested minimal usage (copy-paste)
1. In `styles.css` append:
```css
.icon-inline {
  width: 24px;
  height: 24px;
  vertical-align: -4px;
  margin-right: 8px;
}
```

2. In `index.html` add icons to these titles:
```html
<h2><img class="icon-inline" src="./assets/icons/heatmap.svg" alt=""> Campus Emotional Summary</h2>
<h2><img class="icon-inline" src="./assets/icons/topic-cloud.svg" alt=""> Linguistic Analysis</h2>
```

3. (Optional) Add small icons to bullet points where it improves scan-ability.

## Notes
- Existing icons like `triage.svg`, `early.svg`, `support.svg`, `report.svg` **remain unchanged**.
- For dark mode auto-coloring, you can use the included `icons-sprite.svg` with `currentColor` (see README in package).

---

Thanks!
