import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import styles from "./index.module.scss";

type CardHeaderProps = {
  title: string;
  thumbnail?:  MicroCMSImage;
  children?: React.ReactNode;
};

const CardHeader = ({ title, thumbnail, children }: CardHeaderProps) => {
  return (
    <header className={`${styles["c-card__header"]}`}>
      <figure className={`${styles["c-card__thumbnail"]}`}>
        <Image
          src={thumbnail?.url || `/images/no_image.jpg`}
          width={thumbnail?.height || 640}
          height={thumbnail?.width || 480}
          alt={thumbnail?.alt || `no image`}
        />
      </figure>
      <h3 className={`${styles["c-card__title"]}`}>{title}</h3>
      {children}
    </header>
  );
};

export default CardHeader;
