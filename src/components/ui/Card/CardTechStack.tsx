import styles from "./index.module.scss";

type CardTechStackProps = {
  technology_stack: string[];
};

const CardTechStack = ({ technology_stack }: CardTechStackProps) => {
  return (
    <span className={`${styles["c-card__technology-stack"]}`}>
      {technology_stack.join(" / ")}
    </span>
  );
};

export default CardTechStack;
