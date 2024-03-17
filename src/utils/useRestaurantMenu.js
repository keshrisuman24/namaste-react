import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resDetail, setResDetail] = useState(null);
  useEffect(() => {
    fetchResMenuData();
  }, []);

  fetchResMenuData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const res = await data.json();
    setResDetail(res.data);
  };
  return resDetail;
};

export default useRestaurantMenu;
