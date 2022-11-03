import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards"
import { cards } from "./data";
import CardInfo from "./pages/CardInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cards" exact element={<Cards cards={cards}/>}></Route>
          <Route path="cards/:id" element={<CardInfo cards={cards}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
