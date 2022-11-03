import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards"
import { cards } from "./data";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/books" element={<Cards cards={cards}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
