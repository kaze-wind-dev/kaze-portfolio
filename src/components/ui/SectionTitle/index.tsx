import { forwardRef } from "react";
import styles from "./index.module.scss";

type SectionTitleProps = {
className? : string,
position?: "left"|"right"|"center",
heading:React.ReactNode,
text:React.ReactNode,
};

const SectionTitle = forwardRef<HTMLElement, SectionTitleProps>(({
  className,
  position = "center",
  heading,
  text
}, ref) => {
  const parentClasses = [
    styles['c-section-title'],
    styles[`c-section-title--${position}`],
  ].join(" ");

  return (
    <hgroup className={`${parentClasses} ${className || ''}`} ref={ref}>
      <h2 className={`${styles['c-section-title__heading']}`}>{heading}</h2>
      <p className={`${styles['c-section-title__text']}`}>{text}</p>
    </hgroup>
  );
});

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
