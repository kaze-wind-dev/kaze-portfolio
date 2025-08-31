"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./index.module.scss";
const Cta = ()=> {
  const { animationContainer, addToAnimationRefs } = useScrollAnimation();

return (
    <section className={styles["p-topCta"]} ref={animationContainer}>
        <div className={`${styles["p-topCta__inner"]} inner`}>
          <SectionTitle
            className={styles["p-topCta__title"]}
            heading={<>Contact</>}
            text={<>お問い合わせ</>}
            ref={addToAnimationRefs}
          />
          <p className={styles["p-topCta__text"]}
          ref={addToAnimationRefs}
          >
            お気づきの点や気になることがございましたら
            <br />
            お気軽にお問い合わせください。
          </p>
          <Button
            className={`${styles["p-topCta__button"]} mx-center`}
            href="/contact"
            ref={addToAnimationRefs}
          >
            お問い合わせはこちら
          </Button>
        </div>
      </section>
)
}

export default Cta;