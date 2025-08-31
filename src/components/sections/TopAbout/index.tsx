"use client";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./index.module.scss";

const TopAbout = () => {
  const { animationContainer, addToAnimationRefs } = useScrollAnimation();

  return (
    <section className={styles["p-topAbout"]} ref={animationContainer}>
      <div className={`${styles["p-topAbout__inner"]} inner`}>
        <SectionTitle
          className={styles["p-topAbout__title"]}
          heading={<>About</>}
          text={<>私について</>}
          position="left"
          ref={addToAnimationRefs}
        />
        <div
          className={styles["p-topAbout__text-area"]}
          ref={addToAnimationRefs}
        >
          <p className={styles["p-topAbout__text"]}>
            東京都内でコーダーとして3年間従事。
            <br />
            200件以上のWebサイト構築実績があります。
            <br />
            現在はReact/Next.jsを学習し、フロントエンドエンジニアへの転職を目指しています。
          </p>
          <p className={styles["p-topAbout__text"]}>
            フロントエンドエンジニアとして、より価値のあるWeb開発に挑戦したいと考えています。
          </p>
        </div>
        <Button
          className={styles["p-topAbout__button"]}
          href="/about"
          aria-label="制作者について詳しく見る"
          ref={addToAnimationRefs}
        >
          詳しく見る
        </Button>
        <div className={styles["p-topAbout__image"]}>
          <Image
            src="/images/avatar.jpg"
            width={360}
            height={360}
            alt="アバター画像"
            loading="lazy"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
