import React from "react";
import ReactDOM from "react-dom";
const fname = "Manish";
const lname = "Kumar";

ReactDOM.render(
  <>
    <h1>
      Hi my name is {fname} {lname} .
    </h1>
    <h1>My name is {fname + " " + lname}.</h1>
    <h1>{`My name is ${fname} ${lname}`}</h1>
  </>,
  document.getElementById("root")
);
