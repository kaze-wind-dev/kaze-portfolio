import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { zennLink, githubLink } from "@/constants";
import styles from "./index.module.scss";

const IconList = () => {
  return (
    <ul className={`${styles.iconList}`}>
      <li className={`${styles.iconList__item}`}>
        <Link className={`${styles.iconList__link}`} href={githubLink} target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li className={`${styles.iconList__item}`}>
        <Link className={`${styles.iconList__link}`} href={zennLink} target="_blank">
          <SiZenn color="#3EA8FF"/>
        </Link>
      </li>
    </ul>
  );
};

export default IconList;
