# lambda-slack-notifier

AWS Lambdaでslackに投稿する仕組み

## lint

```shell script
npm run lint
```

## デプロイ

```shell script
npm run build
sls deploy --verbose
```

## 動作検証

リリース後、ローカルで呼び出してE2Eの挙動を確認できる。
デプロイ前の検証にはならないことに注意。

```shell script
sls invoke --local --function main
```

## 消去

```shell script
sls remove
```
