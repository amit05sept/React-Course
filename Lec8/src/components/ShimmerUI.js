const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="input-text" placeholder="search" />
        <button className="search-btn">search</button>
      </div>
      <div className="shimmer-container">
        {Array(20)
          .fill("")
          .map((e,indx) => (
            <div  key={indx} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-title"></div>
              <div className="shimmer-cusines"></div>
              <div className="shmmmer-avgRating"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
