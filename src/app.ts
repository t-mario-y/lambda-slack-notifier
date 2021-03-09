import { Handler } from "aws-lambda";

export const handler: Handler = async () => {
  const scrapboxApiEndpoint = process.env["GET_SCRAPBOX_PAGES_ENDPOINT"];
  const scrapboxCookie = process.env["SCRAPBOX_COOKIE"];

  if (scrapboxApiEndpoint === undefined || scrapboxCookie === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `required environment variables are not set.`,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, world! Your function executed successfully!
        GET_SCRAPBOX_PAGES_ENDPOINT:${scrapboxApiEndpoint}
        SCRAPBOX_COOKIE:${scrapboxCookie}
        `,
      },
      null,
      2
    ),
  };
};
