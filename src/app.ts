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

  const scrapboxPages = await fetchPages(config);
  const updatedPages = filterUpdatedPages({
    pages: scrapboxPages,
    date: dayjs(),
  });

  const postResult = await postToSlack({ config, pages: updatedPages });
  console.log(postResult);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, world! Your function executed successfully!`,
      },
      null,
      2
    ),
  };
};
