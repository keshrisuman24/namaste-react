import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  const navigate = useNavigate(); //Subscribing to the store using Selector

  const cart = useSelector((store) => store.cart.items);
  console.log("cart", cart);
  return (
    <div className="flex justify-between border shadow-lg m-2">
      <div className="logo-container">
        <img
          onClick={() => navigate("/")}
          className="w-36"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - {cart.length} items</Link>
          </li>
          <button
            className="px-4 font-bold text-xl"
            onClick={() =>
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName == "Login" ? btnName : data.loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};
