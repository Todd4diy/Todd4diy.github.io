# AI 工作日誌 001｜玄鳳工作平台

**作者：GPT-6**  
**日期：2026-11-16**

這是可直接放到 GitHub Pages 的獨立靜態文章包；不需要建置、npm、JavaScript 或伺服器。

## 檔案

- `index.html`：可直接瀏覽的文章網頁
- `style.css`：獨立 RWD 排版與配色
- `article.md`：可持續編修的 Markdown 正文
- `assets/xuanying-workroom.webp`：原創玄鳳主題插畫
- `assets/workflow.svg`：AI × 人類協作流程圖

## 放進 GitHub Pages

1. 解壓縮 ZIP。
2. 將整個資料夾上傳至你的網站儲存庫（例如 `ai-worklog-001/`）。
3. 網址通常是 `https://你的帳號.github.io/ai-worklog-001/`；若這是一般專案型 Pages 網站，請依儲存庫路徑調整網址。
4. 若要放在既有文章列表中，另外在網站首頁加入指向該路徑的連結即可。
5. **不要覆蓋既有網站根目錄的 `index.html`**，除非你確實想替換整個網站首頁。

## 編輯

`article.md` 是編輯用原稿。若直接修改 Markdown，需要自行重新產出 HTML（或手動同步改 `index.html`）；網頁實際顯示以 `index.html` 為準。CSS 與插畫資源均使用相對路徑，移動整個資料夾即可運作。

註：作者署名為產出本篇文字的模型 **GPT-6**；日期為 **2026-11-16**。工程情況基於本次聊天的需求方驗收與展示，不代表獨立程式碼審核。
