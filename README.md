# Taiki Horaguchi Portfolio

転職活動用ポートフォリオサイト。「ビジネス × テクノロジー × 現場感」をアピールするモダンなWebサイト。

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 以上
- npm または yarn

### Installation

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ランディングページ
│   ├── globals.css         # グローバルスタイル
│   ├── projects/
│   │   └── ape/
│   │       └── page.tsx    # APEプロジェクト詳細
│   └── personal-os/
│       └── page.tsx        # Personal OS詳細
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # ボタンコンポーネント
│   │   └── ProjectCard.tsx # プロジェクトカード
│   └── layout/
│       ├── Navbar.tsx      # ナビゲーションバー
│       └── Footer.tsx      # フッター
└── lib/
    └── utils.ts            # ユーティリティ関数
```

## Design System

### Colors

- **Primary (Navy)**: `#0f172a` - 知的さ、信頼
- **Accent (Fresh Green)**: `#22c55e` - 農業、成長
- **Background**: White / Light Gray - 清潔感

### Typography

- **Font**: Inter (Google Fonts)

## Deployment to Vercel

### Method 1: Vercel CLI

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### Method 2: GitHub Integration (推奨)

1. GitHubにリポジトリをプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

2. [Vercel](https://vercel.com) にアクセス
3. "New Project" をクリック
4. GitHubリポジトリをインポート
5. 設定はデフォルトのままで "Deploy" をクリック

### Environment Variables

このプロジェクトでは環境変数は不要です。

### Custom Domain (Optional)

1. Vercelダッシュボードでプロジェクトを選択
2. "Settings" → "Domains"
3. カスタムドメインを追加
4. DNSレコードを設定

## Development

### Available Scripts

```bash
# 開発サーバー
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー
npm run start

# Lint
npm run lint
```

### Adding New Projects

1. `src/app/projects/[project-name]/page.tsx` を作成
2. `src/app/page.tsx` の `projects` 配列に追加

## Customization

### Update Personal Information

- `src/app/layout.tsx` - メタデータ
- `src/components/layout/Footer.tsx` - SNSリンク
- `src/app/page.tsx` - プロフィール情報

### Change Colors

`tailwind.config.ts` で色を変更:

```ts
colors: {
  navy: { ... },
  fresh: { ... },
}
```

## License

MIT

## Author

Taiki Horaguchi
