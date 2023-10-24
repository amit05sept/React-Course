const heading1 = React.createElement("h1",{},"THIS IS BASIC REACT APP");
const root = ReactDOM.createRoot(document.getElementById("root"));

// if we want to make something like this 
// div>heading1 + heading2
const heading2 = React.createElement("h2",{},"THIS is heading2");

const divContainer = React.createElement("div",{id:"container",style:{border:"4px solid black"}},[heading1,heading2]);
root.render(divContainer);

