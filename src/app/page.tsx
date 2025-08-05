import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import TopSkill from "@/components/sections/TopSkill";
import TopWorks from "@/components/sections/topWorks";
import TopArticles from "@/components/sections/TopArticles";
import { getWorksList } from "@/lib/api/microcms";
import { getZennArticles } from "@/lib/api/zennFunctions";
import styles from "./page.module.scss";

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
            紹介文を入れましょう紹介文を入れましょう紹介文を入れましょう紹介文を入れましょう
            <br />
            紹介文を入れましょう紹介文を入れましょう
          </h1>
          <Logo className={`${styles["p-topHero__logo"]}`} />
          <div className={`${styles["p-topHero__links"]}`}>
            <Button className={`${styles["p-topHero__button"]}`} href="/works">
              作品を見る
            </Button>
          </div>
        </div>
      </section>

      <section className={styles["p-topAbout"]}>
        <div className={`${styles["p-topAbout__inner"]} inner`}>
          <SectionTitle
            className={styles["p-topAbout__title"]}
            heading={<>About</>}
            text={<>私について</>}
            position="left"
          />
          <div className={styles["p-topAbout__text-area"]}>
            <p className={styles["p-topAbout__text"]}>
              「かぜ」という名前で...
              <br />
              紹介文章が入ります紹介文章が入ります紹介文章が入ります
            </p>
            <p className={styles["p-topAbout__text"]}>
              紹介文章が入ります紹介文章が入ります紹介文章が入ります紹介文章が入ります
            </p>
          </div>
          <Button className={styles["p-topAbout__button"]} href="/works">
            制作者について知る
          </Button>
          <div className={styles["p-topAbout__image"]}>
            {/* <Image></Image> */}
          </div>
        </div>
      </section>

      <TopSkill />
      <TopWorks works={works} />
      <TopArticles articles={zennArticlesData.articles}/>

      <section className={styles["p-topCta"]}>
        <div className={`${styles["p-topCta__inner"]} inner`}>
          <SectionTitle
            className={styles["p-topCta__title"]}
            heading={<>Contact</>}
            text={<>お問い合わせ</>}
          />
          <p className={styles["p-topCta__text"]}>
            お気づきの点や気になることがございましたら
            <br />
            お気軽にお問い合わせください。
          </p>
          <Button
            className={`${styles["p-topCta__button"]} mx-center`}
            href="/contact"
          >
            お問い合わせはこちら
          </Button>
        </div>
      </section>
    </>
  );
}
