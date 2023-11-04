import { CDN_URL } from "./utils/constants";
import restaurants from "./utils/mockData";
import { useState } from "react";

function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((res) => res.info.name.includes(searchText));
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  // let searchText = "KFC";
  //  doing this same thing with useState
  const [searchText, setSearchText] = useState();
  // const [searchClicked, setSearchClicked] = useState("FALSE");

  const [restaurant, setrestaurant] = useState(restaurants);

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
            //   // searchClicked==='TRUE' ? setSearchClicked("FALSE") : setSearchClicked("TRUE");
            //     // if(searchClicked==='FALSE'){
            //     //   setSearchClicked("TRUE");
            //     // }else{
            //     //   setSearchClicked("FALSE");
            //     // }

            //filter data
            const data = filterData(searchText, restaurant);
            setrestaurant(data);
          }}>
          search
        </button>
        {/* <h1>{searchClicked}</h1> */}
      </div>
      <div className="restaurant-list">
        {restaurant.map((res) => {
          return <RestaurantCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img alt="restaurant" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h4 className="avgRating">{avgRating} ⭐️</h4>
    </div>
  );
};

export default Body;
