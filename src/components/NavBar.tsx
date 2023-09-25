import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-full justify-around h-20 flex  items-center ">
      <Link to="/About">
        <img className="w-full h-full" src="/VANLIFE.png" alt="logo" />
      </Link>
      <div className=" w-32 flex justify-between">
        <Link className=" font-bold" to="/About">About</Link>
        <Link className=" font-bold"to="/Vans">Vans</Link>
      </div>
    </div>
  );
};

export default NavBar;
