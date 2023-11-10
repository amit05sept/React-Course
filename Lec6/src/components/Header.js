import { useState } from "react";
import logo from "../../FOOD-VILLA.png";
import { AUTHOR_URL } from "./utils/constants";

function userLoggedIn(isLoggedIn){
  return isLoggedIn;
}
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
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
            <a className="navbar-links" href={AUTHOR_URL} target="_blank">
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
      {userLoggedIn(isLoggedIn) ? (
        <button
          className="logout-btn"
          onClick={() => {
            setisLoggedIn(false);
          }}>
          Log out
        </button>
      ) : (
        <button
          className="login-btn"
          onClick={() => {
            setisLoggedIn(true);
          }}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
