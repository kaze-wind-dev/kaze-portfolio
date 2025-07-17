
import LogoImage from "../LogoImage";
import Link from "next/link";
type Props = {
  width?: number;
  height?: number;
  link?: boolean;
  className?: string;
}

const Logo = ({ width = 581, height = 104, link = false, className }: Props) => {
  return (
    link ? 
      <Link href="/" className={`${className}`}>
        <LogoImage width={width} height={height} />
      </Link>
    :
    <div className={className}>
      <LogoImage width={width} height={height} />
    </div>
  );
};

export default Logo;
