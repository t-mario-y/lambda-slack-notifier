import envSchema, { EnvSchemaData } from "env-schema";

export const createConfig = (): EnvSchemaData => {
  const schema = {
    type: "object",
    required: [
      "GET_SCRAPBOX_PAGES_ENDPOINT",
      "SCRAPBOX_COOKIE",
      "SLACK_INCOMING_WEBHOOK",
    ],
    properties: {
      GET_SCRAPBOX_PAGES_ENDPOINT: { type: "string" },
      SCRAPBOX_COOKIE: { type: "string" },
      SLACK_INCOMING_WEBHOOK: { type: "string" },
    },
  };

  const data = {
    scrapboxApiEndpoint: process.env["GET_SCRAPBOX_PAGES_ENDPOINT"],
    scrapboxCookie: process.env["SCRAPBOX_COOKIE"],
    slackIncomingWebhookUrl: process.env["SLACK_INCOMING_WEBHOOK"],
  };
  return envSchema({ schema, data });
};
