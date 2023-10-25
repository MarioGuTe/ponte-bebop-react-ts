/* eslint-disable react/self-closing-comp */
import s from "./particle/style.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={s.nav_title_container}>
          <h1 className="nav_title">
            PONTE<span>BEBOP</span>
          </h1>
        </div>
        <ul>
          <li>Integrantes</li>
          <li>Bio</li>
          <li>Contacto</li>
          <li>Repertorio</li>
        </ul>
        <div className={s.burger_menu}>
          <div className="line_1 burger_child"></div>
          <div className="line_2 burger_child"></div>
          <div className="line_3 burger_child"></div>
          <div className="line_3 burger_child"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
