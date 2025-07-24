// import type { ZennUserName } from "@/types/zenn";

function zennAPIClient(username: string) {
  async function get() {
    try {
      const response = await fetch(
        `https://zenn.dev/api/articles?username=${username}&order=latest`
      );
      if (!response.ok) {
        throw new Error("接続エラーが発生しました");
      }
      return response.json();
    } catch (error: unknown) {
      if (error) {
        const message =
          error instanceof Error
            ? `APIリクエスト中にエラーが発生しました: ${error.message}`
            : "APIリクエスト中にエラーが発生しました。";
        throw new Error(message);
      }
    }
  }
  return {
    get,
  };
}

export default zennAPIClient;
