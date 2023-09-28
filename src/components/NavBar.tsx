import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-full justify-around h-20 flex bg-[#FFF7ED]  items-center ">
      <Link to="/">
        <img className="w-full h-full" src="/VANLIFE.png" alt="logo" />
      </Link>
      <div className=" w-32 flex justify-between">
        <Link className=" hover:underline font-bold" to="/About">About</Link>
        <Link className=" hover:underline font-bold"to="/Vans">Vans</Link>
      </div>
    </div>
  );
};

export default NavBar;
