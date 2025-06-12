# Lab K9 コーポレートサイト 設定情報一覧

## 基本情報

| 項目 | 設定値 |
|------|--------|
| **サイトURL** | https://lab-k9.com |
| **サイトタイトル** | Lab K9 - AI・機械学習・データ分析のエキスパート |
| **会社名** | Lab K9 |
| **プロジェクト名** | k9-corporate-website |
| **リポジトリ名** | Lab-K9-corporate-page |

## ドメイン・DNS設定

### ドメイン管理
| 項目 | 設定値 |
|------|--------|
| **ドメイン名** | lab-k9.com |
| **レジストラ** | お名前.com |
| **ネームサーバー** | お名前.comのデフォルト |

### DNS設定（お名前.com）
| レコードタイプ | ホスト名 | 設定値 | TTL |
|----------------|----------|--------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | tsubasakimura-k9.github.io. | 3600 |

## GitHub設定

### リポジトリ情報
| 項目 | 設定値 |
|------|--------|
| **GitHubユーザー名** | tsubasakimura-k9 |
| **リポジトリ名** | Lab-K9-corporate-page |
| **リポジトリURL** | https://github.com/tsubasakimura-k9/Lab-K9-corporate-page |
| **デフォルトブランチ** | main |
| **可視性** | Public |

### GitHub Pages設定
| 項目 | 設定値 |
|------|--------|
| **Source** | GitHub Actions |
| **Custom domain** | lab-k9.com |
| **Enforce HTTPS** | ✅ 有効 |
| **Build and deployment** | GitHub Actions |

## 技術スタック

### フロントエンド
| 項目 | バージョン |
|------|------------|
| **Next.js** | 15.2.4 |
| **React** | 18.x |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 3.x |
| **Node.js** | 18.x以上 |

### デプロイ・ホスティング
| 項目 | 設定値 |
|------|--------|
| **ホスティング** | GitHub Pages |
| **CDN** | GitHub Pages CDN |
| **SSL証明書** | GitHub Pages自動発行 |
| **デプロイ方法** | GitHub Actions |

## ファイル構造

### 重要なファイル
```
lab-k9-corporate-page/
├── app/
│   ├── page.tsx              # メインページ
│   ├── layout.tsx            # SEO・レイアウト設定
│   ├── globals.css           # グローバルスタイル
│   └── favicon.ico           # ファビコン
├── components/               # コンポーネント
├── public/
│   ├── images/
│   │   └── logo.png         # ロゴ画像
│   ├── favicon.ico          # ファビコン
│   └── CNAME               # カスタムドメイン設定
├── .github/workflows/
│   └── deploy.yml          # 自動デプロイ設定
├── next.config.mjs         # Next.js設定
├── package.json            # 依存関係
├── ADMIN_GUIDE.md          # 管理者ガイド
├── LOCAL_DEVELOPMENT_GUIDE.md # 開発ガイド
└── SITE_CONFIGURATION.md   # 本ファイル
```

## 環境変数・設定値

### Next.js設定（next.config.mjs）
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### カスタムドメイン設定（public/CNAME）
```
lab-k9.com
```

## SEO・メタデータ設定

### 基本メタデータ
| 項目 | 設定値 |
|------|--------|
| **title** | Lab K9 - AI・機械学習・データ分析のエキスパート |
| **description** | Lab K9は最先端のAI技術を活用し、機械学習、データ分析、システム開発の専門サービスを提供する大阪拠点の技術企業です。 |
| **keywords** | AI, 機械学習, データ分析, システム開発, 大阪, Lab K9 |
| **author** | Lab K9 |
| **viewport** | width=device-width, initial-scale=1 |

### Open Graph設定
| 項目 | 設定値 |
|------|--------|
| **og:title** | Lab K9 - AI・機械学習・データ分析のエキスパート |
| **og:description** | 最先端のAI技術を活用した専門サービス |
| **og:url** | https://lab-k9.com |
| **og:type** | website |
| **og:locale** | ja_JP |

## 会社情報

### 基本情報
| 項目 | 内容 |
|------|------|
| **会社名** | Lab K9 |
| **設立年月日** | 2024年11月 |
| **住所** | 〒530-0001 大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 29階 |
| **代表取締役** | 木村 翼 |
| **連絡先** | info[at]lab-k9.com |

### 取引先実績
- NTTデータ
- artience株式会社
- SCOグループ
- 広告代理店
- 映像制作会社
- ECアパレル企業
- 建設企業
- 東大松尾研発AIスタートアップ
- 他多数

## 提供サービス

### AIソリューション
- 機械学習モデル開発
- 自然言語処理
- 画像認識・解析
- 予測分析

### データ分析
- ビジネスインテリジェンス
- データ可視化
- 統計解析
- データマイニング

### システム開発
- Webアプリケーション開発
- API開発
- データベース設計
- クラウドインフラ構築

### コンサルティング
- AI導入戦略
- データ活用戦略
- 技術選定支援
- プロジェクト管理

## デプロイ設定

### GitHub Actions ワークフロー
```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          
      - name: Install dependencies
        run: npm ci --legacy-peer-deps
        
      - name: Build with Next.js
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## アクセス・権限管理

### 管理者権限
| ユーザー | 権限 | 用途 |
|----------|------|------|
| tsubasakimura-k9 | Owner | フルアクセス・設定変更 |

### 更新権限
- GitHubリポジトリへの直接プッシュ権限
- GitHub Pages設定変更権限
- ドメイン設定変更権限（お名前.com）

## バックアップ・復旧

### 自動バックアップ
- **GitHubリポジトリ**: 全ファイル・履歴が自動保存
- **デプロイ履歴**: GitHub Actionsで履歴管理
- **ドメイン設定**: お名前.com管理画面で確認可能

### 復旧手順
1. GitHubのCommits履歴から復旧ポイントを特定
2. 該当コミットにRevertまたはReset
3. 自動デプロイで反映（2-3分）

## 監視・保守

### 定期チェック項目
- [ ] サイトアクセシビリティ（月1回）
- [ ] SSL証明書状態（月1回）
- [ ] ドメイン有効期限（年1回）
- [ ] 依存関係アップデート（四半期1回）

### 連絡先
- **技術的問題**: GitHub Issues
- **ドメイン関連**: お名前.comサポート
- **緊急時**: 開発者（木村）

---

**最終更新日**: 2024年XX月XX日
**管理者**: 木村 翼 (tsubasakimura-k9) 