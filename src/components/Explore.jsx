import React from "react";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Cards</span>
          </h2>
          <a href="/cards">
            <button className="btn">Explore cards</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Explore;