import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Cards</span>
          </h2>
          <Link to="/cards">
            <button className="btn">Explore cards</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Explore;