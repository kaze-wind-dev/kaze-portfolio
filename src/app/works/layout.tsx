import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "私が作成した作品をご紹介いたします。",
};

export default function WorksPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
