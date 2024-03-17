import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resDetail = useRestaurantMenu(resId);

  if (resDetail == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resDetail?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h5>{costForTwoMessage}</h5>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((el) => (
          <li key={el.card.info.id}>
            {el.card.info.name +
              " - Rs " +
              (el.card.info.price / 100 || el.card.info.defaultPrice / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
