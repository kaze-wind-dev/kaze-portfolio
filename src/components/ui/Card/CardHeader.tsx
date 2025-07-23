import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import styles from "./index.module.scss";

type CardHeaderProps = {
  title: string;
  thumbnail?: MicroCMSImage;
  emoji?: string;
  children?: React.ReactNode;
};

const CardHeader = ({ title, thumbnail, emoji, children }: CardHeaderProps) => {
  return (
    <header className={`${styles["c-card__header"]}`}>
      {thumbnail ? (
        <figure className={`${styles["c-card__thumbnail"]}`}>
          <Image
            src={thumbnail?.url || `/images/no_image.jpg`}
            width={thumbnail?.height || 640}
            height={thumbnail?.width || 480}
            alt={thumbnail?.alt || `no image`}
          />
        </figure>
      ) : emoji ? (
        <div className={`${styles["c-card__emoji"]}`}>{emoji}</div>
      ) : (
        <figure className={`${styles["c-card__thumbnail"]}`}>
          <Image
            src={`/images/no_image.jpg`}
            width={640}
            height={480}
            alt={`no image`}
          />
        </figure>
      )}
      <h3 className={`${styles["c-card__title"]}`}>{title}</h3>
      {children}
    </header>
  );
};

export default CardHeader;
