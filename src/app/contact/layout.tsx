import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Contact",
  description: "ご意見やご感想、気なることなどございましたら、以下のフォームよりお問い合わせください。",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "Contact",
        subTitle: "お問い合わせ",
      }}
    >
      {children}
    </PageLayout>
  );
}
