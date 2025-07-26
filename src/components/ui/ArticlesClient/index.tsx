"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ArticleCard from "@/components/ui/Card/ArticleCard";
import CardsContainer from "@/components/ui/CardsContainer";
import type { ZennArticle } from "@/types/zenn";
import { sortArticles } from "@/lib/utils/zennSort";

type SortKey = keyof ZennArticle;
type Order = "desc" | "asc";

type Props = {
  initialArticles: ZennArticle[];
  initialSortKey: SortKey;
  initialOrder: Order;
  initialSearchQuery: string;
};

export default function ArticlesClient({
  initialArticles,
  initialSortKey,
  initialOrder,
  initialSearchQuery,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [sortKey, setSortKey] = useState<SortKey>(initialSortKey);
  const [order, setOrder] = useState<Order>(initialOrder);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  const updateURL = (
    newSortKey: SortKey,
    newOrder: Order,
    newSearchQuery: string
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", newSortKey);
    params.set("order", newOrder);
    if (newSearchQuery) {
      params.set("searchQuery", newSearchQuery);
    } else {
      params.delete("searchQuery");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortKey = e.target.value as SortKey;
    setSortKey(newSortKey);
    updateURL(newSortKey, order, searchQuery);
  };

  const handleOrder = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    updateURL(sortKey, newOrder, searchQuery);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value as string;
    setSearchQuery(newSearchQuery);
    updateURL(sortKey, order, newSearchQuery);
  };

  const sortedData = sortArticles({
    articles: initialArticles,
    sortKey,
    order,
    searchQuery,
  });

  return (
    <>
      <div>
        <div className="search">
          <label htmlFor="search" className="sr-only">
            タイトル検索
          </label>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="タイトル検索"
            defaultValue={searchParams.get("searchQuery")?.toString()}
          />
        </div>
        <div className="sort">
          <div className="sort-select">
            <label className="sort-select__label" htmlFor="sort-select__area">
              並び順
            </label>
            <select
              className="sort-select__area"
              name="sort-select__area"
              onChange={handleSort}
              value={sortKey}
              id="sort-select__area"
            >
              <option className="sort-select__option" value="published_at">
                投稿日
              </option>
              <option className="sort-select__option" value="liked_count">
                いいね数
              </option>
            </select>
          </div>
          <button
            className="sort__order-button"
            onClick={handleOrder}
            aria-label={
              order === "desc" ? "降順に切り替える" : "昇順に切り替える"
            }
          >
            {order === "desc" ? "↓" : "↑"}
          </button>
        </div>
      </div>

      <CardsContainer>
        {sortedData.length !== 0  ? (
          sortedData.map((article: ZennArticle) => (
            <ArticleCard article={article} key={article.id} />
          ))
        ) : searchQuery ? (
          <p>検索結果が見つかりません</p>
        ) : (
          <p>現在投稿はございません</p>
        )}
      </CardsContainer>
    </>
  );
}
