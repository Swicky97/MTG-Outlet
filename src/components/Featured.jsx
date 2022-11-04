import React from "react";
import Card from './Card';
import { cards, data } from '../data';

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Trending <span className="purple">Cards</span>
          </h2>
          <div className="cards">
            {cards
                .filter((card) => card.rating === 5)
                .slice(0,4)
                .map((card) => <Card card={card} key={card.id}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
