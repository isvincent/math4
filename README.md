# 線性規劃｜互動學習網

本資料夾是可以直接上傳 GitHub 的完整網站內容，首頁就是根目錄 `index.html`。全部檔案為純靜態 HTML、CSS、JavaScript；不需要 Node.js、npm、API 金鑰或編譯。

## 檔案架構

```text
linear-programming-github/
├── index.html                 網站首頁
├── style.css                  明亮／暗色與響應式樣式
├── data.js                    教材主題、範例與題庫
├── app.js                     圖形、練習、測驗、歷程與七項設定
├── extensions.js              學習指引與五個進階探究
├── textbook.pdf               完整原教材 PDF
├── pages/
│   ├── page-01.jpg
│   ├── …
│   └── page-18.jpg             完整教材逐頁圖像
├── .nojekyll                  直接以靜態資源發佈
├── .gitignore
├── README.md
├── GitHub上架說明.md
├── 學習內容與教材對照.md
├── check-site.cjs             選用：檔案與 JavaScript 檢查
├── files.sha256.json          網站資源 SHA-256 清單
└── QA/
    ├── core.json              原功能瀏覽器檢查結果
    ├── extensions.json        新增內容瀏覽器檢查結果
    ├── github.json            GitHub 子路徑新增內容驗證
    └── github-core.json       GitHub 子路徑原功能與下載驗證
```

## 使用

離線使用：解壓縮後，用 Chrome 或 Edge 開啟根目錄 `index.html`。所有圖形、圖片與教材都在本機；不依賴外部字型或服務。

線上使用：依 [GitHub上架說明.md](GitHub上架說明.md) 將**本資料夾內的檔案與 `pages` 資料夾**上傳到儲存庫根目錄，啟用 GitHub Pages。`index.html` 不要放在另一層資料夾裡。

## 新增內容

- 六步學習指引：先備檢查、學習目標、操作路線、練習與測驗、常見錯誤及學習完成檢核。建議總時間約 120 分鐘，可分段進行。
- 資源敏感度：改變精油模型預算，觀察資源瓶頸與邊際收益。
- 整數規劃：切換連續與整數點，理解為何不能直接四捨五入。
- 多重最佳解：改變目標係數，觀察頂點切換與整條最優邊。
- 四種限制情況：封閉有界、無界但可行、限制衝突、嚴格不等式。
- 運輸規劃：配置甲乙庫到 A/B 工廠的運量，檢查庫存與成本。
- 26 題共享題庫、10 題隨機測驗，五個進階探究各有挑戰題。

保留原有六主題、圖形實驗室、教材完整閱讀／下載、學習歷程及七項顯示與操作設定。

## 學習紀錄與設定

紀錄儲存在目前瀏覽器的 localStorage，提供 JSON／CSV 下載。學習指引完成狀態、先備作答、進階操作和挑戰答案都會記錄；不跨裝置或網站網址同步。離線與 GitHub 網址是不同來源，紀錄不會自動移轉。

介面支援繁體中文與英文；原教材 PDF 保留繁體中文。全螢幕依瀏覽器支援。音效預設關閉，可在設定開啟。裝置與版面設定調整網頁排列，並不旋轉實體螢幕。

## 維護與檢查

修改教材敘述、題目與答案：編輯 `data.js`。修改學習路線與進階探究：編輯 `extensions.js`。修改外觀：編輯 `style.css`。修改核心功能：編輯 `app.js`。所有資源使用相對路徑，支援 GitHub 儲存庫子路徑。

有安裝 Node.js 者可在資料夾執行 `node check-site.cjs`。它檢查全部資源、JS 語法、完整 18 頁教材與 SHA-256。修改檔案後可執行 `node check-site.cjs --refresh-hashes` 更新清單，再執行檢查。這是選用檢查工具，學生使用網站不需安裝 Node.js。

此交付包已在本機以 GitHub 儲存庫的子路徑方式驗證。GitHub 上傳與公開發佈由您依說明操作；本次沒有推送至任何 GitHub 儲存庫。
