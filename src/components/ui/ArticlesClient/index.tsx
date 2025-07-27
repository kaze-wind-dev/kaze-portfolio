"use client";

import { useState, useRef, useEffect } from "react";
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

type SelectAreaOption = {
  label: string;
  value: SortKey;
};

const selectAreaOptions: SelectAreaOption[] = [
  {
    label: "投稿順",
    value: "published_at",
  },
  {
    label: "いいね数",
    value: "liked_count",
  },
];

export default function ArticlesClient({
  initialArticles,
  initialSortKey,
  initialOrder,
  initialSearchQuery,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortSelectAreaRef = useRef<HTMLDivElement>(null);
  const [sortKey, setSortKey] = useState<SortKey>(initialSortKey);
  const [order, setOrder] = useState<Order>(initialOrder);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [isSelectAreaOpen, setIsSelectAreaOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sortSelectAreaRef.current &&
        !sortSelectAreaRef.current.contains(e.target as Element)
      ) {
        setIsSelectAreaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, []);

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

  const handleSort = (value: SortKey) => {
    const newSortKey = value;
    setSortKey(newSortKey);
    setIsSelectAreaOpen(false);
    updateURL(newSortKey, order, searchQuery);
  };

  const handleOrder = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    updateURL(sortKey, newOrder, searchQuery);
  };
  const handleSelectArea = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelectAreaOpen(!isSelectAreaOpen);
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
        <div className="search-area">
          <label htmlFor="search" className="sr-only">
            タイトル検索
          </label>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="タイトル検索"
            defaultValue={searchParams.get("searchQuery")?.toString()}
            id="search"
          />
        </div>
        <div className="sort">
          <div className="sort-select" onClick={handleSelectArea}>
            <div className="sort-select__label">並び順</div>
            <div className="sort-select__area" ref={sortSelectAreaRef}>
              <button
                className="sort-select__area-close"
                onClick={handleSelectArea}
              >
                ×
              </button>
              {selectAreaOptions.map((options) => {
                return (
                  <div
                    className="sort-select__item"
                    key={options.value}
                    onClick={() => {
                      handleSort(options.value);
                    }}
                  >
                    {options.label}
                  </div>
                );
              })}
            </div>
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
        {sortedData.length !== 0 ? (
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
