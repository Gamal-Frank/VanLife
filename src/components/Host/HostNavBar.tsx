import { Link } from "react-router-dom";

const HostNavBar = () => {
  return (
    <div className="flex w-full justify-start pl-16 gap-10">
      <Link className=" hover:underline font-bold" to="/Host">
        Dashboard
      </Link>
      <Link className=" hover:underline font-bold" to="/Host/Income">
        Income
      </Link>
      <Link className=" hover:underline font-bold" to="/Host/Vans">
        Vans
      </Link>
      <Link className=" hover:underline font-bold" to="/Host/Reviews">
        Reviews
      </Link>
    </div>
  );
};

export default HostNavBar;
