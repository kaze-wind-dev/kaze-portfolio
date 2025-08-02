
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { getWorksList } from "@/lib/api/microcms";
import WorksCard from "@/components/ui/Card/WorksCard";
import ArticleCard from "@/components/ui/Card/ArticleCard";
import { getZennArticles } from "@/lib/api/zennFunctions";
import type { ZennArticle } from "@/types/zenn";
import styles from "./page.module.scss";

export default async function Home() {
  const { contents: works } = await getWorksList({
    limit: 6,
  });
  const zennArticlesData = await getZennArticles();

  return (
    <>
      <section className={`${styles['p-topHero']} `}>
        <div className={`${styles['p-topHero__inner']} inner`}>
          <h1 className={`${styles['p-topHero__heading']}`}>
            紹介文を入れましょう紹介文を入れましょう紹介文を入れましょう紹介文を入れましょう
            <br />
            紹介文を入れましょう紹介文を入れましょう
          </h1>
          <Logo className={`${styles['p-topHero__logo']}`} />
          <div className={`${styles['p-topHero__links']}`}>
            <Button className={`${styles['p-topHero__button']}`} href="/works">
              作品を見る
            </Button>
          </div>
        </div>
      </section>

      <section className={styles['p-topAbout']}>
        <div className={`${styles['p-topAbout__inner']} inner`}>
          <SectionTitle
        className={styles['p-topAbout__title']}
        heading={<>About</>}
        text={<>私について</>}
          />
          <p className={styles['p-topAbout__text']}>
        「かぜ」という名前で...
        <br />
        紹介文章が入ります紹介文章が入ります紹介文章が入ります
          </p>
          <p className={styles['p-topAbout__text']}>
        紹介文章が入ります紹介文章が入ります紹介文章が入ります紹介文章が入ります
          </p>
          <Button className={styles['p-topAbout__button']} href="/works">
        制作者について知る
          </Button>
          <div className={styles['p-topAbout__image']}>{/* <Image></Image> */}</div>
        </div>
      </section>

      <section className={styles['p-topSkill']}>
        <SectionTitle
          className={styles['p-topSkill__title']}
          heading={<>Skill</>}
          text={<>スキル概要</>}
        />
        <p className={styles['p-topSkill__text']}>
          HTML・Sass・PHP・自社CMSをメインにサイト制作を行っています。
          <br />
          現在の会社へと就職後、およそ3年半で200以上ものサイト構築に携わりました。
        </p>
        <p className={styles['p-topSkill__text']}>
          現在はフロントエンドエンジニアを目指して、React.jsやNext.jsなどモダン開発を学んでいます。
        </p>
   
        <Button className={styles['p-topSkill__button']} href="/about">
          制作者について知る
        </Button>
      </section>
      <section className={styles['p-topWorks']}>
        <div className={`${styles['p-topWorks__inner']} inner`}>
          <SectionTitle
        className={styles['p-topWorks__title']}
        heading={<>Works</>}
        text={<>作品紹介</>}
          />
          {works.map((article) => (
        <WorksCard works={article} key={article.id} />
          ))}
          <Button className={styles['p-topWorks__button']} href="/works">
        作品一覧はこちら
          </Button>
        </div>
      </section>
      <section className={styles['p-topArticles']}>
        <div className={`${styles['p-topArticles__inner']} inner`}>
          <SectionTitle
        className={styles['p-topArticles__title']}
        heading={<>Articles</>}
        text={<>人気の記事</>}
          />
          {zennArticlesData.articles.map((article: ZennArticle) => (
        <ArticleCard article={article} key={article.id} />
          ))}
          <Button className={styles['p-topArticles__button']} href="/works">
        作品一覧はこちら
          </Button>
        </div>
      </section>
      <section className={styles['p-topCta']}>
        <div className={`${styles['p-topCta__inner']} inner`}>
          <SectionTitle
        className={styles['p-topCta__title']}
        heading={<>Contact</>}
        text={<>お問い合わせ</>}
          />
          <p className={styles['p-topCta__text']}>
        お気づきの点や気になることがございましたら
        <br />
        お気軽にお問い合わせください。
          </p>
          <Button className={styles['p-topCta__button']} href="/contact">
        お問い合わせはこちら
          </Button>
        </div>
      </section>
    </>
  );
}
