"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInview } from "@/hooks/useInview";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "@splidejs/react-splide/css";
import styles from "./index.module.scss";

const skillLogos = [
  {
    id: "html",
    src: "/images/html_logo.svg",
    alt: "HTML5",
    width: 100,
    height: 100,
  },
  {
    id: "css",
    src: "/images/css_logo.svg",
    alt: "CSS",
    width: 100,
    height: 100,
  },
  {
    id: "sass",
    src: "/images/sass_logo.svg",
    alt: "SASS",
    width: 133,
    height: 100,
  },
  {
    id: "javascript",
    src: "/images/js_logo.svg",
    alt: "JavaScript",
    width: 100,
    height: 100,
  },
  {
    id: "typescript",
    src: "/images/ts_logo.svg",
    alt: "TypeScript",
    width: 100,
    height: 100,
  },
  {
    id: "next",
    src: "/images/nextjs_logo.svg",
    alt: "Next.js",
    width: 363,
    height: 74,
  },
  {
    id: "react",
    src: "/images/react_logo.svg",
    alt: "react",
    width: 123,
    height: 109,
  },
  {
    id: "php",
    src: "/images/php_logo.svg",
    alt: "PHP",
    width: 141,
    height: 71,
  },
  {
    id: "microcms",
    src: "/images/microcms_logo.svg",
    alt: "microCMS",
    width: 447,
    height: 100,
  },
  {
    id: "vercel",
    src: "/images/vercel_logo.svg",
    alt: "Vercel",
    width: 409,
    height: 81,
  },
  {
    id: "github",
    src: "/images/github_logo.svg",
    alt: "GitHub",
    width: 100,
    height: 98,
  },
];

const TopSkill = () => {
  const { animationContainer, addToAnimationRefs } = useScrollAnimation();
  const ref = useRef<HTMLElement>(null);
  const splideRef = useRef(null);

  const splideOptions = {
    type: "loop",
    focus: "center",
    gap: "1.5rem",
    arrows: false,
    pagination: false,
    autoWidth: true,
    clones: 10,
    cloneStatus: true,
    autoScroll: {
      speed: 0.75,
      autoStart: true,
      pauseOnHover: true,
    },
  };
  const [inview, setInview] = useState(false);

  useInview<HTMLElement>({ ref, setInview, once: false });
  useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      if (inview) {
        splideRef.current.splide.Components?.AutoScroll.play();
      } else {
        splideRef.current.splide.Components?.AutoScroll.pause();
      }
    }
  }, [inview]);

  return (
    <section className={styles["p-topSkill"]} ref={ref}>
      <div ref={animationContainer}>

      <SectionTitle
        className={styles["p-topSkill__title"]}
        heading={<>Skill</>}
        text={<>スキル概要</>}
        ref={addToAnimationRefs}
      />
      <div ref={addToAnimationRefs}>
        <p className={styles["p-topSkill__text"]}>
          HTML・Sass・PHP・自社CMSを使用してサイト制作を行っています。
          <br />
          現在の会社へ就職後、およそ3年半で200以上ものサイト構築に携わりました。
        </p>
        <p className={styles["p-topSkill__text"]}>
          現在は、React.jsやNext.jsなどモダンフロント技術を学んでいます。
        </p>
      </div>
      <div ref={addToAnimationRefs}>
        <Splide
          options={splideOptions}
          aria-label="実務や学習で使用している言語"
          tag="section"
          extensions={{ AutoScroll }}
          className={styles["p-topSkill__slider"]}
          ref={splideRef}
        >
          {skillLogos.map((logo) => {
            const uniqueClassName = `p-topSkill__slider-slide--${logo.id}`;
            return (
              <SplideSlide
                className={`${styles["p-topSkill__slider-slide"]} ${styles[uniqueClassName]}`}
                key={logo.id}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <Button
        className={styles["p-topSkill__button"]}
        href="/about/#skills"
        ref={addToAnimationRefs}
      >
        スキルについて
      </Button>
      </div>
    </section>
  );
};

export default TopSkill;
