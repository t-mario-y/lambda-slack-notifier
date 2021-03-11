import dayjs, { Dayjs } from "dayjs";
import fetch, { Headers, RequestInit } from "node-fetch";
import { ApplicationConfig } from "./types/ApplicationConfig";
import { Page, ScrapboxPagesApiResponse } from "./types/scrapboxApiResponse";

export const filterUpdatedPages = (args: {
  pages: Page[];
  date: Dayjs;
}): Page[] => {
  const onlyDate = dayjs()
    .year(args.date.year())
    .month(args.date.month())
    .date(args.date.date())
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0);

  return args.pages
    .filter((page) => {
      return dayjs.unix(page.updated).isAfter(onlyDate);
    })
    .filter((page) => {
      return dayjs.unix(page.updated).isBefore(dayjs(onlyDate).add(1, "day"));
    });
};

export const fetchPages = async (
  config: ApplicationConfig
): Promise<Page[]> => {
  const url = config.GET_SCRAPBOX_PAGES_ENDPOINT;
  const requestOptions: RequestInit = {
    method: "GET",
    headers: new Headers({
      Cookie: config.SCRAPBOX_COOKIE,
    }),
    redirect: "follow",
  };

  const response = await fetch(url, requestOptions);
  const data = (await response.json()) as ScrapboxPagesApiResponse;
  return data.pages;
};
