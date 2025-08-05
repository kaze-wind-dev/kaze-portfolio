
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";

const topAboutSection = () => {
  return (
    <section className={styles["p-topAbout"]}>
      <div className={`${styles["p-topAbout__inner"]} inner`}>
        <SectionTitle
          className={styles["p-topAbout__title"]}
          heading={<>About</>}
          text={<>私について</>}
        />
        <p className={styles["p-topAbout__text"]}>
          「かぜ」という名前で...
          <br />
          紹介文章が入ります紹介文章が入ります紹介文章が入ります
        </p>
        <p className={styles["p-topAbout__text"]}>
          紹介文章が入ります紹介文章が入ります紹介文章が入ります紹介文章が入ります
        </p>
        <Button className={styles["p-topAbout__button"]} href="/works">
          制作者について知る
        </Button>
        <div className={styles["p-topAbout__image"]}>
          {/* <Image></Image> */}
        </div>
      </div>
    </section>
  );
};

export default topAboutSection;
