const MenuItem = function ({ menudetail }) {
  return (
    <div className="Menu">
      <div className="MenuItems">
        <h3>Menu</h3>
        <div className="itemName">
          {menudetail.map((item,index) => (
            <li key={item?.card?.info?.id}> {index+1}. {item?.card?.info?.name} </li>
          ))}
        </div>
      </div>
      <div className="ItemPrices">
        <h3 className="pricesText"> Prices </h3>
        <div className="itemPrice">
          {menudetail.map((item) => (
            <li key={item?.card?.info?.id}>
              {" "}
              {item?.card?.info?.price / 100} Rs
            </li>
          ))}
        </div>
      </div>
    </div>

    // <div className="MenuItem">
    //   <li className="itemName">{item?.name}</li>
    //   <div className="itemPrice">{item?.price / 100} Rs</div>
    // </div>
  );
};

export default MenuItem;