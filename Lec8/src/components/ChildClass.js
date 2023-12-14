import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child 2 - constructor");
  }
  componentDidMount() {
      this.forceUpdate();
    console.log("child 2 - componentDidMount");
    // this.render();
  }
  componentDidUpdate(){
    console.log("child 2 - componentDidUpdate");
  }
  render() {
    console.log("child 2 - render");
    return <h5>child 2</h5>;
  }
};


export default ChildClass;

