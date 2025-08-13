import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import IconList from "@/components/ui/IconList";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./page.module.scss";

type skillContent = {
  title: string;
  technologies: string[];
  text: string;
};

type skillContentList = skillContent[];

const skillsSectionItems: skillContentList = [
  {
    title: "実務経験（4年）",
    technologies: ["HTML", "CSS", "Sass", "PHP", "jQuery", "EC-CUBE"],
    text: "HTML/CSS(SCSS)を使用したコーディング業務で200件以上のサイト構築しました。\n自社CMSとVanillaPHPでのWebサイトを開発しております。\n入社2年目から、slugやページ名のミスが多かったことをきっかけに、これらを一元管理できないかと考え、Pagemanager（ページ情報管理ツール）を設計・開発しました。配列を使用した情報管理と、関数とクラス構文を活用したコードを実装しています。今年の7月に社内にリリースを行い、現在は運用中です。\n加えて、簡単なマネジメント業務も行っており、支店内のコーダーの構築能力や案件の納期を踏まえて案件の割り振りを行なっております。\nまた、最近では業務で対応可能な範囲でサイト表示改善を行っており、直近の未公開のサイトでは一部のページでPageSpeedInsightsのスコア100を達成しました。",
  },
  {
    title: "個人学習",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "GitHub"],
    text: "ポートフォリオの掲載の有無を合わせて、過去に6プロジェクトを作成しました。\nそのうちポートフォリオ掲載は3作品を掲載しています。\nフロントエンドエンジニアへの転職を目指して、今年の4月よりReact/Next.jsの学習と作品制作を開始。\n過去にもVanillaJSやReactを断続的に学習していましたが、現在は継続的に取り組んでいます。\nNext.js + microCMSでのJamstack構成での開発が可能なレベルまで到達しました。\n「世界一流のエンジニアの思考法」という本を読んでからは特に基本に忠実になろうと意識して学習に取り組んでいます。\n今後は簡易的なCMSやログイン機能付のTODOアプリを作成してみたいと考えております。",
  },
];

export default async function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Articles" }]} />
      <div className="l-container">
        <section className={`${styles["p-profile"]}`}>
          <div className="inner">
            <div className={`${styles["p-profile__container"]}`}>
              <div className={`${styles["p-profile__left"]}`}>
                <hgroup className={`${styles["p-profile__name"]}`}>
                  <h2 className={`${styles["p-profile__name-en"]}`}>Iwamoto Hayate</h2>
                  <span className={`${styles["p-profile__name-ja"]}`}>岩本 颯</span>
                </hgroup>
                <p className={`${styles["p-profile__position"]}`}>コーダー</p>
                <p className={`${styles["p-profile__text"]}`}>
                  はじめまして。
                  <br />
                  東京都内でコーダーとして従事している、岩本颯（いわもとはやて）といいます。<br/>
                  3年間、コーダとして従事しておりますが、常に『限られた期間のなかでいかに早く、綺麗に構築をするか』を考えてコーディングを行い、継続的に構築方法をアップデートするようして参りました。<br/>
                  ヘッドレスCMSを使用したサイト構築に特に興味があり、Jamstack構成のサイト制作やアプリ開発にも興味を持っています。<br/>
                  現在はフロントエンドエンジニアを目指して、学習と転職活動を行なっております。<br/>
                  将来的にはバックエンドへ分野を広げ、フロントを主戦場としたフルスタックエンジニアになることを目標としています。<br/>
                </p>
              </div>
              <div className={`${styles["p-profile__right"]}`}>
                <div className={`${styles["p-profile__box"]}`}>
                  <div  className={`${styles["p-profile__image"]}`}>
                  <Image
                    src="/images/avatar.jpg"
                    width={360}
                    height={360}
                    alt="アバターの画像"
                  />
                  </div>
                  <IconList />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["p-skills"]}`} id="skills">
          <div className="inner">
            <div className={`${styles["p-skills__container"]}`}>
              <SectionTitle
                heading="Skills"
                text="技術・スキル"
                position="left"
              />
              <div className={`${styles["p-skills__items"]}`}>
                {skillsSectionItems.map((item) => {
                  return (
                    <section
                      className={`${styles["p-skills__item"]}`}
                      key={item.title}
                    >
                      <h3 className={`${styles["p-skills__item-title"]}`}>
                        {item.title}
                      </h3>
                      <ul
                        className={`${styles["p-skills__item-technologies"]}`}
                      >
                        {item.technologies.map((technology) => {
                          return (
                            <li
                              className={`${styles["p-skills__item-technology"]}`}
                              key={technology}
                            >
                              {technology}
                            </li>
                          );
                        })}
                      </ul>
                      <div className={`${styles["p-skills__item-text"]}`}>
                        <p>{item.text}</p>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["p-experience"]}`}>
          <div className="inner">
            <div className={`${styles["p-experience__container"]}`}>
              <SectionTitle
                heading="Experience"
                text="経歴・経験"
                position="left"
              />
              <ul className={`${styles["p-experience__list"]}`}>
                <li className={`${styles["p-experience__list-item"]}`}>
                  <p className={`${styles["p-experience__list-item__year"]}`}>
                    2018年4月
                  </p>
                  <p
                    className={`${styles["p-experience__list-item__content"]}`}
                  >
                    高校卒業後、市役所で公務員（土木系技術職）として2年間従事。<br/>
                    下水道工事の工事発注や現場管理、窓口対応などを担当する。<br/>
                    上司だった方から効率化や仕事に対する姿勢を学ぶが、仕事が合わずに悩み、Web業界への転身を決意して退職。
                  </p>
                </li>
                <li className={`${styles["p-experience__list-item"]}`}>
                  <p className={`${styles["p-experience__list-item__year"]}`}>
                    2020年4月
                  </p>
                  <p
                    className={`${styles["p-experience__list-item__content"]}`}
                  >
                    情報学園専門学校へ入学。<br/>しかし授業はほとんど受けず、Udemyや書籍、ネットの情報からデザインの基礎+HTML・CSS（SCSS）のコーディングとvanillaJSの記述を独学。
                  </p>
                </li>
                <li className={`${styles["p-experience__list-item"]}`}>
                  <p className={`${styles["p-experience__list-item__year"]}`}>
                    2022年4月
                  </p>
                  <p
                    className={`${styles["p-experience__list-item__content"]}`}
                  >
                    現在の会社へ就職。
                    <br />
                    コーダーとして従事し、現在に至るまでに200以上のサイトを構築。<br/>
                    通常のサイト構築の業務以外にも、採用担当・新卒教育・改善業務・案件管理を担当する。
                  </p>
                </li>
                <li className={`${styles["p-experience__list-item"]}`}>
                  <p className={`${styles["p-experience__list-item__year"]}`}>
                    2025年4月
                  </p>
                  <p
                    className={`${styles["p-experience__list-item__content"]}`}
                  >
                  現在の会社でのスキルアップに限界点を感じ、フロントエンドエンジニアとして転職することを本気で決意。<br/>
                  本格的にReact.jsやNext.jsを学びながら、ポートフォリオ作成・転職活動中。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
