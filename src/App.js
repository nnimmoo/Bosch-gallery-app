import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Painting from "./pages/Painting";
import SubmitPainting from "./pages/SubmitPainting";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery/:id" element={<Painting />} />
          <Route path="/Submit" element={<SubmitPainting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;