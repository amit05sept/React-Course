import Author from "./assests/Author.jpg";
const About = function () {
  return (
    <div className="About">
      <img src={Author} className="AuthorImg" alt="Author Image" />
      <h1 className="AuthorTitle">{"Hi it is me Amit 😁"}</h1>
    </div>
  );
};

export default About;
