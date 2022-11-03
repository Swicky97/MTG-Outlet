import React from "react";

const Cart = ({ cart }) => {
  return (
    <div id="cards__body">
      <main id="cards__main">
        <div className="cards__container">
          <div className="row">
            <div className="card__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__card">Card</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((card) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__card">
                        <img src={card.url} alt="" className="cart__card--img" />
                        <div className="cart__card--info">
                          <span className="cart__card--title">{card.title}</span>
                          <span className="cart__card--price">{(card.salePrice || card.originalPrice).toFixed(2)}</span>
                          <button className="cart__card--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                        />
                      </div>
                      <div className="cart__total">$6</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub--total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>$18.00</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert("Not yet implemented")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
