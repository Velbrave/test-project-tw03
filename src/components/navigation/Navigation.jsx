import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? css.LinkActive : css.Navlink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tweets"
          className={({ isActive }) =>
            isActive ? css.LinkActive : css.Navlink
          }
        >
          Tweets
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
