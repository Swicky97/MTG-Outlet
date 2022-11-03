import React from "react";
import { Link } from "react-router-dom";
import WBLogo from "../assets/WB.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img src={WBLogo} className="footer__logo--img" alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a href="/books" className="footer__link">
              Cards
            </a>
            <a href="/cart" className="footer__link">
              Cart
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Chase Swick</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;