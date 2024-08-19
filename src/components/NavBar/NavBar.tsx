import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="center"></div>
      <div className="menu-container">
        {navigation.map((e) => {
          return (
            <div className={props.curentPage === e.name ? "selected" : ""}>
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
    </div>
  );
};

export default NavBar;
