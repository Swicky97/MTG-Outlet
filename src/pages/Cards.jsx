import React, { useState } from "react";
import Card from "../components/Card";

const Cards = ({ cards: initialCards }) => {
  const [cards, setCards] = useState(initialCards);

  function filterCards(filter) {
    switch (filter) {
      case "LOW_TO_HIGH":
        return setCards(
          cards
            .slice()
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
        );
      case "HIGH_TO_LOW":
        return setCards(
          cards
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
      case "RATING":
        return setCards(cards.slice().sort((a, b) => b.rating - a.rating));
      default:
        break;
    }
  }

  return (
    <div id="cards__body">
      <main id="cards__main">
        <section>
          <div className="cards__container">
            <div className="row">
              <div className="cards__header">
                <h2 className="section__title cards__header--title">
                  All Cards
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterCards(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="cards">
                {cards.map((card) => (
                  <Card card={card} key={card.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cards;
