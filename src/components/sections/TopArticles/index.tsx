"use client";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SectionTitle from "@/components/ui/SectionTitle";
import ArticleCard from "@/components/ui/Card/ArticleCard";
import CustomSplideArrows from "@/components/ui/CustomSprideArrows";
import type { ZennArticle } from "@/types/zenn";
import styles from "./index.module.scss";

type Props = {
  articles: ZennArticle[];
};
const TopArticles = ({ articles }: Props) => {
  const splideRef = useRef(null);

  const splideOptions = {
    type: "loop",
    focus: "left",
    gap: "1.875rem",
    arrows: false,
    pagination: false,
    fixedWidth: "300px",
    breakpoints: {
      960: {
        gap: "1.5rem",

        fixedWidth: "280px",
      },
      560: {
        fixedWidth: "64%",
      },
      480: {
        gap: "1rem",
        fixedWidth: "72%",
      },
      400: {
        fixedWidth: "80%",
      },
    },
  };

  return (
    <section className={styles["p-topArticles"]}>
      <div className={`${styles["p-topArticles__inner"]}`}>
        <header className={`${styles["p-topArticles__header"]}`}>
          <SectionTitle
            className={styles["p-topArticles__title"]}
            heading={<>Articles</>}
            text={<>人気の記事</>}
            position="left"
          />
          <div className={`${styles["p-topArticles__actions"]}`}>
            <Link href="/works" className={styles["p-topArticles__moreLink"]}>
              一覧を見る
              <HiOutlineArrowNarrowRight
                className={styles["p-topArticles__moreLink-arrow"]}
              ></HiOutlineArrowNarrowRight>
            </Link>
            <CustomSplideArrows
              splideRef={splideRef}
              className={styles["p-topArticles__slider-arrows"]}
            />
          </div>
        </header>
        <Splide
          options={splideOptions}
          aria-label="Zenn記事の一覧"
          tag="section"
          className={styles["p-topArticles__slider"]}
          ref={splideRef}
        >
          {articles.map((article) => {
            return (
              <SplideSlide
                className={`${styles["p-topArticles__slider-slide"]}`}
                key={article.id}
              >
                <ArticleCard article={article} key={article.id} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default TopArticles;
