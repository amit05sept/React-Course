import { Outlet } from "react-router-dom";
import Author from "./assests/Author.jpg";
// import React from "react";
import { Component } from "react";
import Profile from "./ProfileClass";
// import Profile from "./Profile";
import ChildClass from "./ChildClass";
const About2 = function () {
  return (
    <div>
      <div>
        <h1>About section </h1>
      </div>
      {/* <Outlet /> */}
      <Profile />
    </div>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log(" parent - componentDidMount");
  }
componentDidUpdate(){
  console.log("parent - componentDidUpdate");
}
  render() {
    console.log(" parent - render");
    return (
      <div>
        <div>
          <h1>About section </h1>
        </div>
        {/* <Outlet /> */}
        <Profile />
        <ChildClass />
      </div>
    );
  }
}

export default About;
