import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cart.length == 0 ? (
        <h1 className="font-bold text-2xl">Your Cart is Empty</h1>
      ) : (
        <div className="w-6/12 m-auto">
          <button
            className="p-2 bg-black text-white rounded-lg "
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
          <ItemList items={cart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
