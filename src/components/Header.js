import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between border shadow-lg m-2">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName == "Login" ?btnName:data.loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};
