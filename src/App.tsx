import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./Server";
import Vans from "./components/Vans/Vans";
import VanDetails from "./components/Vans/VanDetails";
import Layout from "./components/Layout";
import Income from "./components/Host/HostComponents/Income";
import Reviews from "./components/Host/HostComponents/Reviews";
import HostLayout from "./components/Host/HostLayout";
import DashBoard from "./components/Host/HostComponents/DashBoard";
import HostVans from "./components/Host/HostComponents/HostVans";
import HostVan from "./components/Host/HostComponents/IndividualVan/HostVan";
import Pricing from "./components/Host/HostComponents/IndividualVan/Pricing";
import Photos from "./components/Host/HostComponents/IndividualVan/Photos";
import Details from "./components/Host/HostComponents/IndividualVan/Details";

function App() {
  return (
    <div className="bg-[#FFF7ED]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="Host" element={<HostLayout />}>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route index element={<DashBoard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVan />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
