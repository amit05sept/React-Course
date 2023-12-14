import Author from "./assests/Author.jpg";

const Profile = function () {
  return (
    <div className="About">
      <h1>Profile functional component</h1>
      <img src={Author} className="AuthorImg" alt="Author Image" />
      <h1 className="AuthorTitle">{"Hi it is me Amit 😁"}</h1>
    </div>
  );
};

export default Profile;
