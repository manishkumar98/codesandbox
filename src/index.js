import React from "react";
import ReactDOM from "react-dom";
import youtuber, { name, name2 } from "./App";
ReactDOM.render(
  <>
    <ol>
      <li>MAnish</li>
      <li>{youtuber}</li>
      <li>{name()}</li>
      <li>{name2()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
