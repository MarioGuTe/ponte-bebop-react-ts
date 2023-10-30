import { useState } from "react";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import s from "./particle/style.module.css";

function Header() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = (toggled: boolean) => {
    return toggled ? setShowNavbar(true) : setShowNavbar(false);
  };

  return (
    <header>
      <nav>
        <div className={s.nav_title_container}>
          <h1 className="nav_title">
            PONTE<span>BEBOP</span>
          </h1>
        </div>
        <ul className={`${showNavbar && s.active}`}>
          <li>Integrantes</li>
          <li>Bio</li>
          <li>Contacto</li>
          <li>Repertorio</li>
        </ul>
        <HamburgerIcon onItemClick={handleShowNavbar} />
      </nav>
    </header>
  );
}

export default Header;
