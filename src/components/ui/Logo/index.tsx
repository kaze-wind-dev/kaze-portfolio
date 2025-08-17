import LogoMarkImage from "../LogoImage/LogoMarkImage";
import Link from "next/link";
type Props = {
  width?: number;
  height?: number;
  link?: boolean;
  className?: string;
};

const Logo = ({
  width = 104,
  height = 104,
  link = false,
  className,
}: Props) => {
  return link ? (
    <Link href="/" className={`logo ${className || ""}`}>
      <LogoMarkImage width={width} height={height} />
      <span className="logo-text">Kaze Portfolio</span>
    </Link>
  ) : (
    <div className={`logo ${className || ""}`}>
      <LogoMarkImage width={width} height={height} />
      <span className="logo-text">Kaze Portfolio</span>
    </div>
  );
};

export default Logo;
