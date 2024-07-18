import { NavLink } from "react-router-dom";

const activeStyles = "text-black font-bold";
const inactiveStyles = "text-white font-bold";
export const NavBar = () => {
  return (
    <nav className=" flex space-x-8 justify-end">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
     HOME
      
      </NavLink>
      <NavLink
        to={"/curriculum"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        CURRICULUM

        
      </NavLink>
      <NavLink
        to={"/contacts"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        CONTACTS
      </NavLink>
      
      
      
    </nav>
  );
};
