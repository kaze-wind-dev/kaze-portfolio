import Link from "next/link";
import styles from "./index.module.scss"

type Props = {
  totalCount: number;
  basePath?: string;
  perpage?: number;
  current?: number;
};

const Pagination = ({
  totalCount,
  basePath,
  perpage = 10,
  current = 1,
}: Props) => {
  const pages = Array.from(
    { length: Math.ceil(totalCount / perpage) },
    (_, i) => i + 1
  );

  return (
    pages.length !== 1 && (
      <nav className={`${styles['c-pagination']}`} aria-label="ページネーション">
        <ul className={`${styles['c-pagination__list']}`}>
          {pages.map((page) => (
            <li key={page} className={`${styles['c-pagination__item']}`}>
              {current !== page ? (
                <Link
                  href={`/${basePath}/page/${page}`}
                  className={`${styles['c-pagination__link']}`}
                >
                  {page}
                </Link>
              ) : (
                <span className={`${styles['c-pagination__link']} ${styles['c-pagination__link--current']}`}>
                  {page}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
