# GitHub Pages 上架說明

## 1. 解壓並檢查首頁位置

解壓縮網站 ZIP 後，應直接看到 `index.html`、`app.js`、`extensions.js`、`style.css`、`textbook.pdf` 及 `pages` 資料夾。先開啟 `index.html` 確認內容。

## 2. 將完整檔案上傳到儲存庫

1. 在 GitHub 建立一個用來放網站的儲存庫，或使用您選定的儲存庫。
2. 選擇 **Add file → Upload files**。
3. 上傳解壓縮後的全部網站檔案與 `pages` 資料夾，不要只上傳 ZIP，不要多包一層外層資料夾。
4. 確認 `index.html` 位於儲存庫根目錄，`pages/page-01.jpg` 到 `pages/page-18.jpg` 都有上傳。
5. 提交到 `main`。`.nojekyll` 是隱藏檔，若檔案管理器未顯示可開啟「顯示隱藏的項目」；或在 GitHub 用 Add file → Create new file 新增名為 `.nojekyll` 的空檔。

## 3. 啟用 Pages

1. 開啟儲存庫的 **Settings → Pages**。
2. 在 **Build and deployment** 將 Source 設為 **Deploy from a branch**。
3. Branch 選 **main**，資料夾選 **/(root)**，按 **Save**。
4. 等待部署完成，使用 Pages 顯示的網站網址。

一般專案網站網址會是 `https://你的帳號.github.io/儲存庫名稱/`。本包使用相對路徑，支援這種子路徑，首頁不需要設定成 `dist/index.html`。

設定依據：[GitHub 官方：設定發佈來源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[GitHub 官方：建立 Pages 網站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

## 4. 上架後驗證

- 首頁可見「學習指引」與「進階探究」。
- 五個進階探究的滑桿和挑戰題可操作。
- 原教材所有 18 頁能翻頁，PDF 能下載。
- 練習可重做、測驗可提交、學習歷程能下載。
- 手機沒有整頁橫向溢出；繁中／英文、亮色／暗色與字體設定正常。

若首頁出現 404，先檢查 `index.html` 是否真的位於所選分支的根目錄、Pages 是否選 `main / (root)`，以及部署是否已完成。若圖片或 PDF 404，確認對應檔案都有上傳，且保留原檔名與大小寫。

## 5. 更新內容

在同一儲存庫更新相關原始檔，提交到發佈分支後，Pages 會重新部署。這份網站不需要額外的建置流程。
