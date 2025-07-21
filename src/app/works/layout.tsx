import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Works",
  description: "私が作成した作品をご紹介いたします。",
};

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <PageLayout
        hero={{
          heading: "Works",
          subTitle: "作品紹介",
          pageDescription: (
            <>
              現在のスキルを使用して作成した作品たちです。
              <br />
              デザイン的な見た目よりも、コードの美しさや保守性を意識して作成いたしました。
            </>
          ),
        }}
      >
        {children}
      </PageLayout>
  );
}
