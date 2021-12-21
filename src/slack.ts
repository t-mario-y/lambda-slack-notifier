import fetch from "node-fetch";
import { ApplicationConfig } from "./types/ApplicationConfig";
import { Page } from "./types/scrapboxApiResponse";

export const postToSlack = async (args: {
  config: ApplicationConfig;
  pages: Page[];
}): Promise<any> => {
  const webhookUrl = args.config.SLACK_INCOMING_WEBHOOK;

  const messageBody = { text: scrapboxPagesToMessage(args.pages) };
  const response = await fetch(webhookUrl, {
    method: "POST",
    body: JSON.stringify(messageBody),
    headers: { "Contents-Type": "application/json" },
  });

  return response;
};

const scrapboxPagesToMessage = (pages: Page[]): string => {
  return pages
    .map((elem) => elem.title)
    .reduce((accumulator, current) => {
      return accumulator + "\n" + current;
    });
};
