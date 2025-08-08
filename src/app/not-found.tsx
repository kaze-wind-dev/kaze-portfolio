import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import PageLayout from "@/components/layout/PageLayout";
import styles from "./notfound.module.scss";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "お探しのページは見つかりません",
};

export default function Home() {
  return (
    <PageLayout
      hero={{
        heading: "Not Found",
        subTitle: "お探しのページは見つかりません",
        pageDescription: (
          <>
            アクセスいただいたページは存在しないか、移動または削除された可能性があります。
            <br />
            お手数ですが、再度お試しいただくか、メニューから目的のページをご確認ください。
          </>
        ),
      }}
    >
      <Breadcrumbs items={[{ name: "Not Found" }]} />
      <div className="l-container">
        <div className={`${styles["p-notfound"]}`}>
          <div className="inner">
            <div className={`${styles["p-notfound__links"]}`}>
              <Button className={`${styles["p-notfound__button"]}`} href="/">
                Topに戻る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
