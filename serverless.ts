import { AWS } from "@serverless/typescript";

const serverlessConfig: AWS = {
  service: "aws-nodejs-example",
  frameworkVersion: "2",

  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    lambdaHashingVersion: "20201221",
    region: "ap-northeast-1",
  },

  functions: {
    hello: {
      handler: "dist/app.handler",
    },
  },
};

module.exports = serverlessConfig;
