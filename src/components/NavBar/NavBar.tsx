import "./NavBar.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  curentPage: string;
}

const NavBar = (props: Props) => {
  const navigation = [
    { id: 0, name: "home" },
    { id: 1, name: "destination" },
    { id: 2, name: "crew" },
    { id: 3, name: "technology" },
  ];

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="center"></div>
      <div className="menu-container">
        {navigation.map((e) => {
          return (
            <div
              key={e.id}
              className={props.curentPage === e.name ? "selected" : ""}
            >
              {props.curentPage === e.name ? (
                <p>
                  0{e.id} {e.name}
                </p>
              ) : (
                <Link to={e.name === "home" ? `/` : `/${e.name}`}>
                  <p>
                    0{e.id} {e.name}
                  </p>
                </Link>
              )}
            </div>
          );
        })}
      </div>
      {/* Mobile version */}
      <div className="menu-container-mobile">
        {menuOpened ? (
          <div className="menu-mobile-displayed">
            <div className="icon-container">
              <img
                src={close}
                alt="close icon"
                onClick={() => setMenuOpened(false)}
              />
            </div>

            {navigation.map((e) => {
              return (
                <div
                  key={e.id}
                  className={
                    props.curentPage === e.name
                      ? "selected mobile-element"
                      : "mobile-element"
                  }
                >
                  {props.curentPage === e.name ? (
                    <p>
                      <span>0{e.id}</span> {e.name}
                    </p>
                  ) : (
                    <Link to={e.name === "home" ? `/` : `/${e.name}`}>
                      <p>
                        <span>0{e.id}</span> {e.name}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <img
            src={hamburger}
            alt="menu icon"
            onClick={() => setMenuOpened(true)}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
