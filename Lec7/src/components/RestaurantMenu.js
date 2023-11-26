import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./utils/constants";
import MenuItem from "./MenuItem";
import Shimmer from "./ShimmerUI";

const RestaurantMenu = function () {
  // const params = useParams();
  const { id } = useParams();
  // console.log(id);

  const [restaurant, setrestaurant] = useState(null);
  const [menudetail, setmenudetail] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.179683924526447&lng=79.93636887520552&catalog_qa=undefined&submitAction=ENTER&restaurantId=" +
        id
    );
    // console.log(data);

    const json = await data.json();
    console.log(json);
    const menu = json?.data?.cards?.find((x) => x.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // setresMenu(menu);
    // console.log(menu);
    // console.log(menu[0].card?.info);
    setmenudetail(menu);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setrestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return (!restaurant) ? (
    <Shimmer /> // need to replace this shimmer with something great looking and matching with UI
  ) : (
    <div className="RestaurantMenu">
      <div className="RestaurantMenuHeader">
        <h1>
          <span className="flower"> &#10070; </span>{" "}
          <span className="resNameMenuCard">{restaurant.name}</span>
          <span className="OpenCloseStatus">
            {" "}
            {restaurant?.isOpen ? (
              <span className="restaurantOpen">OPEN</span>
            ) : (
              <span className="restaurantClosed">CLOSED</span>
            )}
          </span>
        </h1>
      </div>
      <div className="RestaurantMenuBody">
        <div className="RestaurantDetailsContainer">
          <img
            src={CDN_URL + restaurant?.cloudinaryImageId}
            className="RestaurantMenuImage"
          />
          <div className="restaurantDetails">
            <div className="Discounts">
              <span className="dots">&#9864; </span>{" "}
              <div className="discount">
                {restaurant?.aggregatedDiscountInfoV2?.descriptionList?.map(
                  (discount, index) => {
                    return <li key={index}> . {discount.meta}</li>;
                  }
                )}
              </div>
            </div>
            <li>
              <span className="dots">&#9864; </span>
              {restaurant?.avgRatingString} &#9733;{" "}
            </li>
            <li>
              <span className="dots">&#9864; </span>
              {restaurant?.totalRatingsString}
            </li>
          </div>
        </div>
        <div className="RestaurantMenuItems">
          {menudetail === undefined ? (
            <div>
              <h1>Menu Items not available</h1>
            </div>
          ) : (
            <MenuItem menudetail={menudetail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
