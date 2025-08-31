import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import TopSkill from "@/components/sections/TopSkill";
import TopWorks from "@/components/sections/topWorks";
import TopArticles from "@/components/sections/TopArticles";
import TopAbout from "@/components/sections/TopAbout";
import TopCta from "@/components/sections/TopCta";
import TypingAnimation from "@/components/TypingAnimation";
import { getWorksList } from "@/lib/api/microcms";
import { getZennArticles } from "@/lib/api/zennFunctions";
import styles from "./page.module.scss";

export const revalidate = 600;

export default async function Home() {
  const { contents: works } = await getWorksList({
    limit: 6,
  });
  const zennArticlesData = await getZennArticles();

  return (
    <>
      <section className={`${styles["p-topHero"]} `}>
        <div className={`${styles["p-topHero__inner"]} inner`}>
          <h1 className={`${styles["p-topHero__heading"]}`}>
            
            <TypingAnimation
              texts={["コーダーからフロントエンドエンジニアへ"]}
              typingSpeed={0.1}
              pauseTime={3}
              loop = {false}
            />
            
            <br />
            3年間培った経験を活かし、次のステージを目指しています。
          </h1>
          <Logo className={`${styles["p-topHero__logo"]}`} />
          <div className={`${styles["p-topHero__links"]}`}>
            <Button className={`${styles["p-topHero__button"]}`} href="/works">
              作品を見る
            </Button>
          </div>
           <div className={`${styles["p-topHero__scroll-guide"]}`}>
            <span className={`${styles["p-topHero__scroll-guide__text"]}`}>
              scroll
            </span>
            <div className={`${styles["p-topHero__scroll-guide__bar"]}`}></div>
          </div>
        </div>
      </section>
      <TopWorks works={works} />
      <TopArticles articles={zennArticlesData.articles} />
      <TopSkill />
      <TopAbout />
      <TopCta />
    </>
  );
}
