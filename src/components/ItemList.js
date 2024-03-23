import React from "react";
import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 border-x-0 border-t-0 text-left flex"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                {" "}
                - Rs{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <span className="text-xs ">{item.card.info.description}</span>
          </div>
          <div className="w-2/12 p-2">
            <button
              className="absolute p-2 bg-black text-white rounded-lg h-[35px] w-[70px] mt-[70px] items-center"
              onClick={() => {}}
            >
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-[120px] h-[80px] rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
