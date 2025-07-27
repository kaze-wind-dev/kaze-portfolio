import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import ArticlesClient from "@/components/ArticlesClient";
import { getZennArticles } from "@/lib/api/zennFunctions";
import styles from "./page.module.scss";
import { ZennArticle } from "@/types/zenn";

type Props = {
  searchParams: {
    sort?: string;
    order?: string;
    searchQuery?: string;
  };
};

export default async function ArticlesListPage({ searchParams }: Props) {
  const fetchData = await getZennArticles();
  const { sort, order, searchQuery } = await searchParams;
  const qSortKey = (sort as keyof ZennArticle) || "published_at";
  const qOrder = (order as "asc" | "desc") || "desc";
  const qSearchQuery = (searchQuery as string) || "";
  return (
    <>
      <Breadcrumbs items={[{ name: "Articles" }]} />
      <div className="l-container">
        <div className={`${styles["p-articles"]}`}>
          <div className="inner">
            <ArticlesClient
              initialArticles={fetchData.articles}
              initialSortKey={qSortKey}
              initialOrder={qOrder}
              initialSearchQuery={qSearchQuery}
            />
          </div>
        </div>
      </div>
    </>
  );
}
