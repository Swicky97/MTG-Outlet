import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Ratings from "../components/ui/Ratings";

const CardInfo = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((card) => +card.id === +id);

  return (
    <div id="cards__body">
      <main id="cards__main">
        <div className="cards__container">
          <div className="row">
            <div className="card__selected--top">
              <Link to="/cards" className="card__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/cards" className="card__link">
                <h2 className="card__selected--title--top">Cards</h2>
              </Link>
            </div>
            <div className="card__selected">
              <figure className="card__selected--figure">
                <img src={card.url} alt="" className="card__selected--img" />
              </figure>
              <div className="card__selected--description">
                <h2 className="card__selected--title">{card.title}</h2>
                <Ratings rating={card.rating} />
                <div className="card__selected--price">
                  <Price
                    salePrice={card.salePrice}
                    originalPrice={card.originalPrice}
                  />
                </div>
                <div className="card__summary">
                  <h3 className="card__summary--title">Card Details</h3>
                  <p className="card__summary--para">{card.details}</p>
                </div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cards__container">
          <div className="row">
            <div className="card__selected--top">
              <div className="card__selected--title--top">
                <h2>Recommended cards</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardInfo;
