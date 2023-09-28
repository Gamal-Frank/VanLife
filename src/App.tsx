import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./Server";
import Vans from "./components/Vans";

function App() {
  return (
    <div className="bg-[#FFF7ED]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
