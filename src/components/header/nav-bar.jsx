import { NavLink } from "react-router-dom";

const activeStyles = "text-white/50 font-bold";
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
        to={"/list"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        ESTUDANTES

        
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
