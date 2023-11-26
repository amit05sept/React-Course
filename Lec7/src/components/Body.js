import { CDN_URL } from "./utils/constants";
import restaurants from "./utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import emptySearch from "./EmptySearch";
import { Link } from "react-router-dom";
function filterData(searchText, restaurant) {
  if (searchText === "" || searchText === null) return restaurant;
  const filteredData = restaurant.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}

function printRestaurantList(filteredRestaurant) {
  return filteredRestaurant?.map((res) => {
    return (
      <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
        {" "}
        <RestaurantCard {...res.info} />{" "}
      </Link>
    );
  });
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [restaurant, setrestaurant] = useState([]);

  useEffect(() => {
    console.log("render empty");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const res = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!res.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await res.json();
        // console.log(json);

        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
        const resData = await checkJsonData(json);
        setfilteredRestaurant(resData);
        setrestaurant(resData);
      }
    } catch (err) {
      console.log(err);
    }
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
            if (e.target.value !== undefined || e.target.value !== null)
              setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // console.log("haan bhai ");
            const data = filterData(searchText, restaurant);
            // if data is empty then dont do anything.
            if (data !== undefined || data !== null)
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
