import { Handler } from "aws-lambda";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { createConfig } from "./config";
import { fetchPages, filterUpdatedPages } from "./scrapbox";
import { postToSlack } from "./slack";

export const handler: Handler = async () => {
  const config = createConfig();

  console.log(config);

  dayjs.locale(ja);

  const scrapboxPages = await fetchPages();
  const updatedPages = filterUpdatedPages({
    pages: scrapboxPages,
    date: dayjs(),
  });

  const postResult = await postToSlack(updatedPages);
  console.log(postResult);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, world! Your function executed successfully!
        GET_SCRAPBOX_PAGES_ENDPOINT:${config["scrapboxApiEndpoint"]},
        SCRAPBOX_COOKIE:${config["scrapboxCookie"]},
        SLACK_INCOMING_WEBHOOK:${config["slackIncomingWebhookUrl"]}`,
      },
      null,
      2
    ),
  };
};
