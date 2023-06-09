import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li>
          <NavLink to="/">Home || </NavLink>
        </li>
        <li>
          <NavLink to="/store">Store ||</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ||</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist ||</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login ||</NavLink>
        </li>
        <li>
          <NavLink to="/mockman">MockMan</NavLink>
        </li>
      </ul>
    </nav>
  );
};
