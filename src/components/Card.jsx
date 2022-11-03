import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./ui/Ratings";
import Price from "./ui/Price";

const Card = ({ card }) => {
  return (
    <div className="card">
      <Link to={`/cards/${card.id}`}>
        <figure className="card__img--wrapper">
          <img src={card.url} alt="" />
        </figure>
      </Link>
      <div className="card__title">
        <Link to={`/cards/${card.id}`} className="card__title--link">
          {card.title}
        </Link>
      </div>
      <Ratings rating="4.5" />
      <Price salePrice={card.salePrice} originalPrice={card.originalPrice} />
    </div>
  );
};

export default Card;
