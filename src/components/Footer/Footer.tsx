import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import s from "./particle/style.module.css";

function Footer() {
  return (
    <footer>
      <p>© PonteBebop Santiago de Chile 2023</p>
      <div className={s.footer_icons_container}>
        <Link
          to="https://www.instagram.com/pontebebop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://www.instagram.com/pontebebop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
