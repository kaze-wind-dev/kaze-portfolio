import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";

const TopHero = () => {
  return (
    <section className={`${styles["p-topHero"]}`}>
      <div className={`${styles["p-topHero__inner"]}`}>
        <h1 className={`${styles["p-topHero__description"]}`}>
          紹介文が入ります紹介文が入ります紹介文が入ります
          <br />
          紹介文が入ります紹介文が入ります紹介文が入ります
        </h1>
        <div className={`${styles["p-topHero__logo"]}`}>
          <Logo width={581} height={104} link={true} />
        </div>
        <div className={`${styles["p-topHero__actions"]}`}>
          <Button href="/about" variant="primary" size="medium">
            Kazeについて知る
          </Button>
          <Button href="/works" variant="primary" size="medium">
            作品をみる
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
