import { NavLink } from "react-router-dom";

const IndNav = () => {
  return (
    <div className="flex w-full justify-start  my-5 gap-10">
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        end
        className=" hover:underline font-bold"
        to={`.`}
      >
        Details
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to={`pricing`}
      >
        Pricing
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : {}
        }
        className=" hover:underline font-bold"
        to={`photos`}
      >
        Photos
      </NavLink>
    </div>
  );
};

export default IndNav;
