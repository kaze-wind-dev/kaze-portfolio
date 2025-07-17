import Link from "next/link";
import IconList from "@/components/ui/IconList";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner inner">
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link href="/" className="footer__nav-link">
                Top
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/about" className="footer__nav-link">
                About
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/works" className="footer__nav-link">
                Works
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/articles" className="footer__nav-link">
                Articles
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link href="/contact" className="footer__nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__icon-list">
          <IconList />
        </div>
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} Kaze</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
