import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resData, showItems, setShowIndex }) => {
  const { title, itemCards } = resData;

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowIndex()}
        >
          <span className="font-bold text-xl">
            {title + " (" + itemCards.length + ")"}
          </span>
          <span className="font-bold text-lg">{showItems ? "^" : "v"}</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
