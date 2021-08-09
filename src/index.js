import React from "react";
import ReactDOM from "react-dom";
const name = "Manish";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const img4 = "https://picsum.photos/200/300";
const link = "https://www.google.com";
ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {name}</h1>
    <img src={img1} alt="Random image" />
    <img src={img2} alt="Random image" />
    <img src={img3} alt="Random image" />
    <a href={link} target="_blank">
      <img src={img4} alt="Random image" />
    </a>
  </>,
  document.getElementById("root")
);
