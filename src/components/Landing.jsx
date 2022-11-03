import React from "react";
import UndrawCards from "../assets/undraw_playing_cards.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most popular MTG E-commerce platform</h1>
            <h2>
              Find the cards you need with <span className="purple">Collection</span>
            </h2>
            <Link to="#features">
              <button className="btn">Browse cards</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawCards} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
