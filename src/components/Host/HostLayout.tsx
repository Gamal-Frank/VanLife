import { Outlet } from "react-router-dom";
import HostNavBar from "./HostNavBar";

const HostLayout = () => {
  return (
    <div>
      <HostNavBar />
      <Outlet />
    </div>
  );
};

export default HostLayout;
