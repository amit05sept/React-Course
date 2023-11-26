import { useState } from "react";
// import logo from "../../FOOD-VILLA.png";
import logo from "../../FoodVilla.png";
import { AUTHOR_URL } from "./utils/constants";
import { Link } from "react-router-dom";


function userLoggedIn(isLoggedIn){
  return isLoggedIn;
}
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  console.log("header rendered");
  return (
    <header className="header">
      <img src={logo} alt="FOOD-VILLA" className="logo"  />
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link className="navbar-links" to="/">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link className="navbar-links" to="/about">
              About
            </Link>{" "}
          </li>
          <li>
            <Link className="navbar-links" to="/contact">
              Contact
            </Link>{" "}
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
