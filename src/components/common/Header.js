import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/clients" activeStyle={activeStyle}>
        Clients
      </NavLink>
      {" | "}
      <NavLink to="/history" activeStyle={activeStyle}>
        History
      </NavLink>
      {" | "}
      <NavLink to="/react/shortcuts" activeStyle={activeStyle}>
        Visual Studio Shortcuts
      </NavLink>
      {" | "}
      <NavLink to="/react/redux/initial" activeStyle={activeStyle}>
        Redux Initial Setup
      </NavLink>
      {" | "}
      <NavLink to="/hooks/use-reducer" activeStyle={activeStyle}>
        Hooks - useReducer
      </NavLink>
      {" | "}
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Header;
