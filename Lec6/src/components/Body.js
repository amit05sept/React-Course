import { CDN_URL } from "./utils/constants";
import restaurants from "./utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";

function filterData(searchText, restaurant) {
  // this is wrong iDK why
  // if(typeof (searchText)==="undefined" || searchText.length===0) return restaurant;

  const filteredData = restaurant.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

function printRestaurantList(filteredRestaurant) {
  return filteredRestaurant.map((res) => {
    return <RestaurantCard {...res.info} key={res.info.id} />;
  });
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [restaurant, setrestaurant] = useState([]);

  useEffect(() => {
    // console.log("render empty");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.72988448748185&lng=83.43745395541193"
    );
    const data = await res.json();
    console.log(
      data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setfilteredRestaurant(
      data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setrestaurant(
      data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  if (filteredRestaurant?.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="input-text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("haan bhai ");
            const data = filterData(searchText, restaurant);
            setfilteredRestaurant(data);
          }}>
          search
        </button>
      </div>
      <div className="restaurant-list">
        {printRestaurantList(filteredRestaurant)}
      </div>
    </>
  );
};

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // console.log(typeof(avgRating));
  return (
    <div className="card">
      <img alt="restaurant" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      {typeof avgRating === "number" ? (
        <h4 className="avgRating">{avgRating} ⭐️</h4>
      ) : null}
    </div>
  );
};

export default Body;
