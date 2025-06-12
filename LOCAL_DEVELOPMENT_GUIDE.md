# ローカル開発環境ガイド

## はじめに
このガイドは、Lab K9 コーポレートサイトをローカル環境で開発・テストするためのガイドです。
大きな変更を行う前に、ローカルでテストしてから本番反映することを強く推奨します。

## 1. 必要な環境

### 基本要件
- **Node.js**: バージョン 18.0 以上
- **npm**: Node.jsに付属（または yarn）
- **Git**: バージョン管理
- **エディタ**: Visual Studio Code推奨

### 環境確認コマンド
```bash
node --version    # v18.0.0 以上であること
npm --version     # 確認のみ
git --version     # 確認のみ
```

## 2. プロジェクトのセットアップ

### 2.1 初回セットアップ
```bash
# プロジェクトをクローン
git clone https://github.com/tsubasakimura-k9/Lab-K9-corporate-page.git

# プロジェクトディレクトリに移動
cd lab-k9-corporate-page

# 依存関係をインストール
npm install --legacy-peer-deps
```

### 2.2 開発サーバーの起動
```bash
# 開発サーバーを起動
npm run dev

# ブラウザで以下のURLにアクセス
# http://localhost:3001
```

## 3. 開発ワークフロー

### 3.1 基本的な開発手順
1. **最新版を取得**
```bash
git pull origin main
```

2. **ブランチを作成**（大きな変更の場合）
```bash
git checkout -b feature/新機能名
```

3. **開発サーバー起動**
```bash
npm run dev
```

4. **ファイルを編集**
   - エディタでファイルを編集
   - ブラウザで変更を確認（自動リロード）

5. **本番ビルドテスト**
```bash
npm run build
npm run start
```

6. **変更をコミット**
```bash
git add .
git commit -m "変更内容の説明"
```

7. **GitHubにプッシュ**
```bash
git push origin main
```

## 4. 重要なコマンド

### 開発関連
```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動（ビルド後）
npm run start

# 静的サイト生成
npm run build && npm run export
```

### Git関連
```bash
# 変更状況確認
git status

# 変更内容確認
git diff

# コミット履歴確認
git log --oneline

# 特定のコミットに戻す
git reset --hard コミットID
```

## 5. ファイル構造と編集ポイント

### 5.1 よく編集するファイル
```
app/
├── page.tsx          # メインページ（会社情報、サービス一覧）
├── layout.tsx        # 全体レイアウト、SEO、メタデータ
└── globals.css       # 全体のスタイル

components/
├── ui/              # UI コンポーネント
└── header.tsx       # ヘッダーコンポーネント（必要に応じて）

public/
├── images/          # 画像ファイル
├── favicon.ico      # サイトアイコン
└── CNAME           # ドメイン設定（変更不要）
```

### 5.2 編集例

#### 会社情報の更新（app/page.tsx）
```tsx
// 基本情報セクションを探して編集
{
  label: "設立年月日",
  value: "新しい日付"
},
```

#### SEO情報の更新（app/layout.tsx）
```tsx
export const metadata: Metadata = {
  title: "新しいタイトル | Lab K9",
  description: "新しい説明文",
  // ...
}
```

## 6. トラブルシューティング

### 6.1 よくある問題

#### pnpm関連のエラー
```bash
# エラー例: "pnpm: command not found"
# 解決策: npmを使用する
npm install --legacy-peer-deps
```

#### ポートが使用中のエラー
```bash
# エラー例: "Port 3000 is in use"
# 解決策: 自動的に3001ポートが使用される（問題なし）
```

#### ビルドエラー
```bash
# 構文エラーの確認
npm run build

# エラーメッセージを確認して該当ファイルを修正
```

### 6.2 緊急時の復旧

#### 作業内容を破棄して最新版に戻す
```bash
git stash           # 作業中の変更を一時保存
git pull origin main  # 最新版を取得
```

#### 特定のコミットに戻す
```bash
git log --oneline     # コミット履歴を確認
git reset --hard コミットID  # 指定したコミットに戻す
```

## 7. デプロイ前のチェックリスト

### 7.1 必須チェック項目
- [ ] `npm run build` が成功する
- [ ] ローカルで `npm run start` が動作する
- [ ] 全ページが正常に表示される
- [ ] 画像が正しく表示される
- [ ] リンクが正常に動作する
- [ ] レスポンシブデザインが正常（スマホ表示）

### 7.2 SEO・アクセシビリティチェック
- [ ] メタデータが適切に設定されている
- [ ] 画像にalt属性が設定されている
- [ ] ページタイトルが適切
- [ ] 構造化データが正しい

## 8. Git操作の詳細

### 8.1 ブランチ操作
```bash
# 新しいブランチを作成して切り替え
git checkout -b feature/新機能名

# ブランチ一覧表示
git branch

# ブランチ切り替え
git checkout main

# ブランチ削除
git branch -d feature/新機能名
```

### 8.2 コミット操作
```bash
# 変更をステージング
git add ファイル名    # 特定ファイル
git add .           # すべての変更

# コミット
git commit -m "変更内容の説明"

# 直前のコミットメッセージを修正
git commit --amend -m "新しいメッセージ"
```

## 9. パフォーマンス最適化

### 9.1 画像最適化
- **形式**: WebP形式推奨（PNG/JPGも可）
- **サイズ**: 必要最小限にリサイズ
- **圧縮**: 品質を保ちながら圧縮

### 9.2 コード最適化
```bash
# バンドルサイズ分析
npm run build && npm run analyze
```

## 10. VS Code設定（推奨）

### 10.1 必要な拡張機能
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag

### 10.2 設定ファイル（.vscode/settings.json）
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

---

**このガイドは開発者向けの詳細版です。日常的な更新作業には「ADMIN_GUIDE.md」をご参照ください。** 