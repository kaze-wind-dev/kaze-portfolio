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
    text: "HTML/CSS(SCSS)を使用したコーディング業務で200件以上のサイト構築。\n自社CMSとVanillaPHPでの開発。\n入社2年目からPagemanager（ページ管理ツール）を設計・開発し、 関数とクラス構文を活用したコードを実装。今年の7月に社内にリリースしました。",
  },
  {
    title: "個人学習",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "GitHub"],
    text: "ポートフォリオの掲載の有無を合わせて、6プロジェクトを作成。\nそのうちポートフォリオ掲載は3作品。\nフロントエンドエンジニアへの転職を目指して、今年の4月よりReact/Next.jsの学習を本格的に開始。\n過去にもVanillaJSやReactを断続的に学習していましたが、 現在は継続的に取り組み、 現在はNext.js + microCMSでのJamstack開発が可能なレベルまで到達。",
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
                  <h2 className={`${styles["p-profile__name-en"]}`}>Kaze</h2>
                  <span className={`${styles["p-profile__name-ja"]}`}>かぜ</span>
                </hgroup>
                <p className={`${styles["p-profile__position"]}`}>コーダー</p>
                <p className={`${styles["p-profile__text"]}`}>
                  はじめまして。
                  <br />
                  東京都内でコーダーをしている、Kaze（かぜ）といいます。
                </p>
              </div>
              <div className={`${styles["p-profile__right"]}`}>
                <div className={`${styles["p-profile__box"]}`}>
                  <div  className={`${styles["p-profile__image"]}`}>

                  <Image
                    src="/images/no_image.jpg"
                    alt="noimage"
                    width={160}
                    height={160}
                   
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
                    高校卒業後、市役所で公務員として2年間従事。
                  </p>
                </li>
                <li className={`${styles["p-experience__list-item"]}`}>
                  <p className={`${styles["p-experience__list-item__year"]}`}>
                    2020年4月
                  </p>
                  <p
                    className={`${styles["p-experience__list-item__content"]}`}
                  >
                    Web業界への転身を決意し、専門学校へ入学。
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
                    コーダーとして従事する。
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
