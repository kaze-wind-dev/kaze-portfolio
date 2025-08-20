import zennAPIClient from "./zennClient";

if (!process.env.ZENN_USERNAME) {
  throw new Error("usernameが設定されていません");
}

const client = zennAPIClient(process.env.ZENN_USERNAME);

export async function getZennArticles() {
  "use cache";
  return await client.get();
}
