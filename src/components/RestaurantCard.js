import React from "react";
import { CDN_URL } from "../utils/constant";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[270px] h-[500px] bg-gray-100 rounded-lg hover:bg-slate-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="w-[270px] h-[250px] rounded-lg"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="font-medium">{cuisines.join(", ")}</h4>
      <h4 className="font-light">{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
