import Link from "next/link";
import Logo from "@/components/ui/Logo";
import IconList from "@/components/ui/IconList";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__inner">
        <Logo className="header__logo" />
        <div className="header__line">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link href="/" className="header__nav-link">Top</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/about" className="header__nav-link">About</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/works" className="header__nav-link">Works</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/articles" className="header__nav-link">Articles</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/contact" className="header__nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header__icon-list">
            <IconList />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
