import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import { cards } from "./data";
import CardInfo from "./pages/CardInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(card) {
    setCart([...cart, card])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cards" exact element={<Cards cards={cards} />}></Route>
          <Route
            path="cards/:id"
            element={<CardInfo cards={cards} addToCart={addToCart} />}
          ></Route>
          <Route path="/cart" element={<Cart cards={cards} cart={cart}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
