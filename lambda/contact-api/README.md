# contact-api

LPからの問い合わせフォーム（資料請求・デモリクエスト）を受けて

- slack通知
- 受付メール送信
- SFDCリードフォーム送信

を行います

## エンドポイント

```
お問い合わせ: [POST]{$apiUri}/contact-lp
```

## リリース方法

```bash
contact-api$ npx sls deploy --stage production
```


## ローカル開発

```bash
contact-api$ npm install
contact-api$ npx sls offline start
```

## スタックを削除

```bash
contact-api$ npx sls remove
```
