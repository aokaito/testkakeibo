# Kakeibo App

Kakeibo Appは、家計簿を管理するためのシンプルで使いやすいアプリケーションです。このアプリは、ユーザーが収支を記録し、月次の統計情報を確認できるように設計されています。

## 機能

- **トランザクションの追加**: ユーザーは金額、カテゴリ、メモを入力して新しいトランザクションを追加できます。
- **トランザクションの一覧表示**: 直近のトランザクションをカード形式で表示します。
- **月次統計**: 支出の合計や残り予算を視覚的に表示します。
- **設定**: 月予算やカテゴリの編集、ダークモードの切替が可能です。

## プロジェクト構成

```
kakeibo-app
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── progress.tsx
│   │   ├── TransactionList.tsx
│   │   ├── TransactionForm.tsx
│   │   └── Navbar.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── transactions.tsx
│   │   ├── stats.tsx
│   │   └── settings.tsx
│   ├── backend
│   │   ├── db.ts
│   │   ├── models
│   │   │   └── transaction.ts
│   │   └── routes
│   │       └── transactions.ts
│   ├── types
│   │   └── index.ts
│   └── app.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## セットアップ手順

1. リポジトリをクローンします。
   ```
   git clone <repository-url>
   cd kakeibo-app
   ```

2. 依存関係をインストールします。
   ```
   npm install
   ```

3. アプリを起動します。
   ```
   npm start
   ```

4. ブラウザで `http://localhost:3000` にアクセスしてアプリを使用します。

## 使用技術

- **React**: ユーザーインターフェースを構築するためのライブラリ。
- **TypeScript**: 型安全なJavaScriptを提供するための言語。
- **Tailwind CSS**: ユーザーインターフェースのスタイリングに使用。
- **Node.js**: バックエンドの実装に使用。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。