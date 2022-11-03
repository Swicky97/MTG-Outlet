import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card }) => {
  return (
    <div className="card">
      <a href="">
        <figure className="card__img--wrapper">
          <img src={card.url} alt="" />
        </figure>
      </a>
      <div className="card__title">
        <a href="/" className="card__title--link">
          {card.title}
        </a>
      </div>
      <div className="card__ratings">
        {new Array(Math.floor(card.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
        {
          !Number.isInteger(card.rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
      <div className="card__price">
        {card.salePrice ? (
          <>
            <span className="card__price--normal">
              ${card.originalPrice.toFixed(2)}
            </span>
            {card.salePrice.toFixed(2)}
          </>
        ) : (
          <>${card.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Card;
