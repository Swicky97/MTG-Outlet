import React from "react";
import { cards } from "../data";
import Card from "./ui/Card";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Cards</span>
          </h2>
          <div className="cards">
            {cards
                .filter(card => card.salePrice != null)
                .slice(0,8)
                .map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
