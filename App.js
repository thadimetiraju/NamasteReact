
import React from "react";
import ReactDOM from "react-dom/client";

//NESTED ELEMENTS

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello im an H1 tag"),
    React.createElement("h2", {}, "Hello im an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello im an H1 tag"),
    React.createElement("h2", {}, "Hello im an H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
