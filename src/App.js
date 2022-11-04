import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import { cards } from "./data";
import CardInfo from "./pages/CardInfo";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(card) {
    const dupeItem = cart.find((item) => item.id === card.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...card, quantity: 1 }]
    );
  }

  function changeQuantity(card, quantity) {
    setCart(
      cart.map(item => {
        if (item.id === card.id) {
          return {
            ...item, 
            quantity: +quantity
          }
        }
        else {
          return item
        }
      })
    )
  }

  function removeItem(item) {
    setCart(cart.filter(card => card.id !==  item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cards" exact element={<Cards cards={cards} />}></Route>
          <Route
            path="cards/:id"
            element={<CardInfo cards={cards} addToCart={addToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart cards={cards} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
