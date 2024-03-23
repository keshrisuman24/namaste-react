import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resDetail = useRestaurantMenu(resId);

  if (resDetail == null) {
    return <Shimmer />;
  }

  const categories =
    resDetail?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (el) =>
        el?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { name, cuisines, costForTwoMessage } =
    resDetail?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-3xl text-black font-bold my-4">{name}</h1>
      <p className="text-lg font-bold">{cuisines.join(", ")}</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          resData={category.card.card}
          showItems={showIndex == index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
