import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
