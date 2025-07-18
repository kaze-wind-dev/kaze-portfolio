import Link from "next/link";
import styles from "./index.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "fit";
  target?: "_blank" | "_self";
  className?: string;
};

const Button = ({
  href,
  children,
  variant,
  size,
  target = "_self",
  className,
}: ButtonProps) => {

  const buttonClasses = [
    styles[`c-button`],
    styles[`c-button--${variant || "primary"}`],
    styles[`c-button--${size || "medium"}`],
    className || "",
  ].join(" ");
  return (
    <Link href={href} className={buttonClasses} target={target}>
      {children}
    </Link>
  );
};

export default Button;
