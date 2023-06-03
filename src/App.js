import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Reservation from "./Components/Reservation/Reservation";
import About from "./Components/About/About";
import NoMatch from "./Components/NoMatch/NoMatch";
import Nav from "./Components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Book" element={<Reservation />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
