import React from "react";
import ReactDOM from "react-dom";

const name = "Manish";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h>My name is {name}.</h>
    <p>Date is {date}</p>
    <p>Time is {time}</p>
  </>,
  document.getElementById("root")
);
