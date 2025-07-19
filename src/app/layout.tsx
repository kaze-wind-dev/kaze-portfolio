import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Outfit } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ZenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zenkaku-gothic-new",
  display: "swap",
  preload: true,
});

const OutfitFont = Outfit({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-outfit",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://example.com"), // 公開前に変更
  title: {
    default: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    template: "%s | Kaze Portfolio",
  },
  description:
    "コーダーからフロントエンドエンジニアへ。4年間のコーディング経験を活かし、React/Next.jsでモダンなWeb開発に挑戦するKazeのポートフォリオサイトです。",
  keywords: [
    "Kaze",
    "かぜ",
    "ポートフォリオ",
    "フロントエンドエンジニア",
    "コーダー",
    "React",
    "Next.js",
    "Web制作",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Kaze" }],
  openGraph: {
    type: "website",
    siteName: "Kaze Portfolio",
    title: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    description: "コーダーからフロントエンドエンジニアへ。React/Next.jsでモダンなWeb開発に挑戦するKazeのポートフォリオサイト。",
    images: [
      {
        url: "ogp_image.jpg",
        width: 1200,
        height: 630,
        alt: "Kaze Portfolio OGP画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    description: "コーダーからフロントエンドエンジニアへ。React/Next.jsでモダンなWeb開発に挑戦中。",
  },
  robots: "noindex", // まだ公開しないため拒否
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${ZenKakuGothicNewFont.variable} ${OutfitFont.variable}`}
    >
      <body>
        <div className="global-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
