import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import s from "./particle/style.module.css";

type Props = {
  refs: {
    membersSectionRef: React.MutableRefObject<HTMLElement | null>;
    bioSectionRef: React.MutableRefObject<HTMLElement | null>;
    contactSectionRef: React.MutableRefObject<HTMLElement | null>;
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header({ refs }: Props, _ref: unknown) {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const location = useLocation();

  const handleShowNavbar = (toggled: boolean) => {
    return toggled ? setShowNavbar(true) : setShowNavbar(false);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (
    currentRef: React.MutableRefObject<HTMLElement | null>
  ) => {
    window.scrollTo({
      top: currentRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    scrollFunction: () => void
  ) => {
    if (e.key === "Enter" || e.key === "Space") {
      scrollFunction();
    }
  };

  return (
    <header>
      <nav>
        {location.pathname === "/" ? (
          <>
            <div
              role="button"
              tabIndex={0}
              className={s.nav_title_container}
              onClick={goToTop}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                handleKeyDown(e, goToTop)
              }
            >
              <h1 className="nav_title">
                PONTE<span>BEBOP</span>
              </h1>
            </div>
            <ul className={`${showNavbar && s.active}`}>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    scrollToSection(refs.membersSectionRef);
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    handleKeyDown(e, () =>
                      scrollToSection(refs.membersSectionRef)
                    )
                  }
                >
                  Integrantes
                </div>
              </li>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    scrollToSection(refs.bioSectionRef);
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    handleKeyDown(e, () => scrollToSection(refs.bioSectionRef))
                  }
                >
                  Bio
                </div>
              </li>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    scrollToSection(refs.contactSectionRef);
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                    handleKeyDown(e, () =>
                      scrollToSection(refs.contactSectionRef)
                    )
                  }
                >
                  Contacto
                </div>
              </li>
              <li>Repertorio</li>
            </ul>
            <HamburgerIcon onItemClick={handleShowNavbar} />
          </>
        ) : (
          <>
            <div className={s.nav_title_container}>
              <NavLink to="/">
                <h1 className="nav_title">
                  PONTE<span>BEBOP</span>
                </h1>
              </NavLink>
            </div>
            <NavLink to="/">
              <div>
                <p className={s.go_back}>Regresar</p>
              </div>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default React.forwardRef(Header);
