import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WBLogo from "../assets/WB.png";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="title__container">
          <div className="title">
            <img className="logo" src={WBLogo} alt="" />
            <h3>&nbsp;&nbsp;MTG <br />&nbsp;Outlet</h3>
          </div>
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__a">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/cards" className="nav__a">
              Cards
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link">
                Cards
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
