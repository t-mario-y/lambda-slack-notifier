import { AWS } from "@serverless/typescript";

const serverlessConfig: AWS = {
  service: "scrapbox-feeds",
  frameworkVersion: "2",

  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    lambdaHashingVersion: "20201221",
    region: "ap-northeast-1",
    stage: "production",
  },

  functions: {
    main: {
      handler: "dist/app.handler",
      environment: {
        GET_SCRAPBOX_PAGES_ENDPOINT:
          "${ssm:/scrapbox-feeds/get-scrapbox-pages-endpoint~true}",
        SCRAPBOX_COOKIE: "${ssm:/scrapbox-feeds/scrapbox-cookie~true}",
      },
    },
  },
};

module.exports = serverlessConfig;
