# MindMate 最小改動：行動體驗微調包

目的：在**最小代碼改動**下，改善手機端的可用性與易用性。
本包只調整 `styles.css` 與 `script.js`，不動 `index.html` 結構與內容。

## 變更摘要
- **錨點偏移修正**：`[id]{ scroll-margin-top:84px }`，避免 sticky header 遮蓋段落標題。
- **點擊範圍**：在手機（≤560px）與無滑鼠環境下，`.btn`、`.topnav a` 最小高度 44px。
- **鍵盤可及性**：對 `a/.btn/summary` 加上清晰的 `:focus-visible` 外框。
- **iOS 表單體驗**：`input, textarea` 設 `font-size:16px`，避免聚焦時自動縮放。
- **平滑捲動（尊重低動作偏好）**：若使用者未開啟「降低動作」，自動開啟全局平滑捲動。
- **補上 viewport（若缺）**：在 `script.js` 以 JS 檢查並動態補上 `<meta name="viewport">`。

## 使用方式
1. 將本包的 `styles.css` 與 `script.js` 覆蓋到你 repo 根目錄（與原檔同名）。
2. 或套用 patch：

```bash
git apply minimal-mobile.patch
```

> 以上變更皆為**附加式**，不會破壞既有樣式命名與版面。

## 版本
生成時間：2025-11-12T15:35:10
