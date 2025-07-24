import zennAPIClient from "./zennClient";
import type { ZennArticle } from "@/types/zenn";

if (!process.env.ZENN_USERNAME) {
  throw new Error("usernameが設定されていません");
}

const client = zennAPIClient(process.env.ZENN_USERNAME);

export async function getZennArticles() {
  return await client.get();
}

type getZennSortArticlesProps = {
  sortKey: keyof ZennArticle;
  order?: "asc" | "desc";
};

export async function getZennSortArticles({
  sortKey,
  order = "desc",
}: getZennSortArticlesProps) {
  const fetchData = await client.get();
  const articles = fetchData.articles;
  if (order == "asc") {
    return [...articles].sort((a, b) => a[sortKey] - b[sortKey]);
  } else if (order == "desc") {
    return [...articles].sort((a, b) => b[sortKey] - a[sortKey]);
  } else {
    return [...articles];
  }
}
