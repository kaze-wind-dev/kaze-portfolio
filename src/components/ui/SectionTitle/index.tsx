import styles from "./index.module.scss";

type SectionTitleProps = {
className? : string,
position?: "left"|"right"|"center",
heading:React.ReactNode,
text:React.ReactNode,
};

const SectionTitle = ({
  className,
  position = "center",
  heading,
  text
}: SectionTitleProps) => {

  const parentClasses = [
    styles['c-section-title'],
    styles[`c-section-title--${position}`],
  ].join(" ");
  return (
    <hgroup className={`${parentClasses} ${className || ''}` }>
      <h2 className={`${styles['c-section-title__heading']}`}>{heading}</h2>
      <p className={`${styles['c-section-title__text']}`}>{text}</p>
    </hgroup>
  );
};

export default SectionTitle;
