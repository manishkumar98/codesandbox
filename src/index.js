import React from "react";
import ReactDOM from "react-dom";
var name = "Manish";
ReactDOM.render(
  <>
    <p>Hi there, {name}</p>
    <p>{3 + 4}</p>
    <p>{Math.random()}</p>
  </>,
  document.getElementById("root")
);
