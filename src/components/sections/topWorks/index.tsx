"use client";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SectionTitle from "@/components/ui/SectionTitle";
import WorksCard from "@/components/ui/Card/WorksCard";
import CustomSplideArrows from "@/components/ui/CustomSprideArrows";
import type { Works } from "@/types/microcms";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import styles from "./index.module.scss";

type Props = {
  works: Works[];
};

const TopWorks = ({ works }: Props) => {
  const { animationContainer, addToAnimationRefs } = useScrollAnimation();
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
    <section className={`${styles["p-topWorks"]} `} ref={animationContainer}>
      <div className={`${styles["p-topWorks__inner"]}`}>
        <header
          className={`${styles["p-topWorks__header"]}`}
          ref={addToAnimationRefs}
        >
          <SectionTitle
            className={styles["p-topWorks__title"]}
            heading={<>Works</>}
            text={<>作品紹介</>}
            position="left"
          />

          <div className={`${styles["p-topWorks__actions"]}`}>
            <Link href="/works" className={styles["p-topWorks__moreLink"]}>
              一覧を見る
              <HiOutlineArrowNarrowRight
                className={styles["p-topWorks__moreLink-arrow"]}
              />
            </Link>
            <CustomSplideArrows
              splideRef={splideRef}
              className={styles["p-topWorks__slider-arrows"]}
            />
          </div>
        </header>
        <div ref={addToAnimationRefs}>
          <Splide
            options={splideOptions}
            aria-label="作品一覧"
            tag="section"
            className={styles["p-topWorks__slider"]}
            ref={splideRef}
          >
            {works.map((article) => {
              return (
                <SplideSlide
                  className={`${styles["p-topWorks__slider-slide"]}`}
                  key={article.id}
                >
                  <WorksCard works={article} />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default TopWorks;