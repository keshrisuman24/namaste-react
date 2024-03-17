import React, { useState, useEffect } from "react";
import { RES_LIST_URL } from "../utils/constant";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlinetStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [resList, setResList] = useState([]);
  const [mainResList, setMainResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const status = useOnlinetStatus();
  console.log("status", status);

  useEffect(() => {
    fetchResData();
  }, []);

  fetchResData = async () => {
    const data = await fetch(RES_LIST_URL);
    const res = await data.json();
    setResList(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMainResList(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!status) {
    return <h1>Looks like you are offline</h1>;
  }

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchText) {
                const filteredRes = mainResList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setResList(filteredRes);
              } else {
                setResList(mainResList);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((el) => (
          <Link key={el.info.id} to={"/restaurant/" + el.info.id}>
            <RestaurantCard resData={el.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
