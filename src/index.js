import React from "react";
import ReactDOM from "react-dom";
import { Addition, Subtraction } from "./Addition";
import youtuber, { name, name2 } from "./App";
ReactDOM.render(
  <>
    <ol>
      <li>{Addition(1, 2)}</li>
      <li>{Subtraction(2, 4)}</li>
    </ol>
  </>,
  document.getElementById("root")
);
