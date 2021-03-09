import fetch from "node-fetch";
import { Page } from "./types/scrapboxApiResponse";

export const postToSlack = async (pages: Page[]): Promise<any> => {
  const webhookUrl = process.env["SLACK_INCOMING_WEBHOOK"] as string;

  const messageBody = { text: scrapboxPagesToMessage(pages) };
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
