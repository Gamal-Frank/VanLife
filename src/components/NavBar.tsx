import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-full justify-around h-20 flex bg-[#FFF7ED]  items-center ">
      <NavLink to="/">
        <img className="w-full h-full" src="/VANLIFE.png" alt="logo" />
      </NavLink>
      <div className=" w-32 flex gap-5 justify-between">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:underline underline font-bold"
              : " hover:underline font-bold"
          }
          to="/Host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:underline underline font-bold"
              : " hover:underline font-bold"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:underline underline font-bold"
              : " hover:underline font-bold"
          }
          to="/Vans"
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
