import logo from "../../FOOD-VILLA.png";
import {AUTHOR_URL} from "./utils/constants";


const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="FOOD-VILLA" className="logo" />
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="navbar-links" href="#">
              Home
            </a>{" "}
          </li>
          <li>
            <a className="navbar-links" href="#">
              About
            </a>{" "}
          </li>
          <li>
            <a
              className="navbar-links"
              href={AUTHOR_URL}
              target="_blank">
              Contacts
            </a>{" "}
          </li>
          <li>
            <a className="navbar-links" href="#">
              CART
            </a>{" "}
          </li>
        </ul>
      </nav>
      <div className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  );
};

export default Header;
