import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WBLogo from "../assets/WB.png";

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
        <a href="/" className="title__container">
          <div className="title">
            <img className="logo" src={WBLogo} alt="" />
            <h3>&nbsp;&nbsp;MTG <br />&nbsp;Outlet</h3>
          </div>
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__a">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/books" className="nav__a">
              Cards
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/books" className="menu__link">
                Cards
              </a>
            </li>
            <li className="menu__list">
              <a href="/cart" className="menu__link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
