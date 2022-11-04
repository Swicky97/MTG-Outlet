import React, { useEffect, useState } from "react";
import UndrawCards from "../assets/undraw_playing_cards.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(
        (item.salePrice || item.originalPrice) * item.quantity
      ).toFixed(2);
    });
    return price;
  };
  const subTotal = () => {};

  return (
    <div id="cards__body">
      <main id="cards__main">
        <div className="cards__container">
          <div className="row">
            <div className="card__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              {cart.length > 0 && (
                <div className="cart__header">
                  <span className="cart__card">Card</span>
                  <span className="cart__quantity">Quantity</span>
                  <span className="cart__total">Price</span>
                </div>
              )}
              <div className="cart__body">
                {cart.map((card) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__card">
                        <img
                          src={card.url}
                          alt=""
                          className="cart__card--img"
                        />
                        <div className="cart__card--info">
                          <span className="cart__card--title">
                            {card.title}
                          </span>
                          <span className="cart__card--price">
                            {card.salePrice || card.originalPrice}
                          </span>
                          <button
                            className="cart__card--remove"
                            onClick={() => removeItem(card)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={card.quantity}
                          onChange={(event) =>
                            changeQuantity(card, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        {(
                          (card.salePrice || card.originalPrice) * card.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={UndrawCards} alt="" className="cart__empty--img" />
                  <h2>You don't have any cards in your cart!</h2>
                  <Link to="/cards">
                    <button className="btn">Browse Cards</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub--total">
                  <span>Subtotal</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.07).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>{(total() + total() * 0.07).toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Not yet implemented")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
