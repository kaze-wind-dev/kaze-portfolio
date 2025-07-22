import { notFound } from "next/navigation";
import { WORKS_LIST_LIMIT } from "@/constants";
import { getWorksList, getWorksCategoryList } from "@/lib/api/microcms";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import WorksCard from "@/components/ui/Card/WorksCard";
import CardsContainer from "@/components/ui/CardsContainer";
import CategoryFilter from "@/components/ui/CategoryFilter";
import Pagination from "@/components/ui/Pagination";
import WorksListLayout from "@/components/layout/WorksLayout/WorksListLayout";
import styles from "../../page.module.scss";

type Props = {
  params: {
    current: string;
  };
};

export default async function WorksListPage({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  const { contents: categories } = await getWorksCategoryList();

  return (
    <WorksListLayout>
      <Breadcrumbs items={[{ name: "Works" }]} />
      <div className="l-container">
        <div className={`${styles["p-works"]}`}>
          <div className="inner">
            <CategoryFilter categories={categories} basePath="works" />
             {works.length === 0 ? (
              <p className="nopost-message">現在投稿はございません。</p>
            ) : (
              <>
               <CardsContainer>
              {works.map((article) => (
                <WorksCard works={article} key={article.id} />
              ))}
            </CardsContainer>
            <Pagination
              totalCount={totalCount}
              perpage={WORKS_LIST_LIMIT}
              basePath="works"
              current={current}
            />
              </>
            )}
            
          </div>
        </div>
      </div>
    </WorksListLayout>
  );
}
