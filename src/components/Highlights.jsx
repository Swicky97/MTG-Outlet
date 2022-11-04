import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">MTG Outlet</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Quick and Easy"
              para="Cards arrive quickly and safely after order placement."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="box-open" />}
              title="10,000+ Cards"
              para="Cards of all varieties and prices in stock."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Beating the market value by over 10%."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;