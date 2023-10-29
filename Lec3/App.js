import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = (
  <h1 id="title" key="h1">
    This is JSX REACT APP
  </h1>
);
const heading2 = <h2>THIS is heading2</h2>;
const Div = ()=> {
  return (
    <div>
      {heading1}
      {heading2}
      <h4>this is last line</h4>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Div());
