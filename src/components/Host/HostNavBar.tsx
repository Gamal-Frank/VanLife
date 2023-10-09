import { NavLink } from "react-router-dom";

const HostNavBar = () => {
  return (
    <div className="flex w-full justify-start pl-16 gap-10">
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to="."
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to="Income"
      >
        Income
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to="Vans"
      >
        Vans
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to="Reviews"
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default HostNavBar;
