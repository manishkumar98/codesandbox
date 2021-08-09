import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const name = "Manish";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const img4 = "https://picsum.photos/200/300";
const link = "https://www.google.com";
const heading = {
  color: "#fa9191",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9cf",
  margin: "50px",
  fontFamily: "'Josefin Sans', sans-serif"
};
ReactDOM.render(
  <>
    <h1 style={heading}>My name is {name}</h1>
    <h1
      style={{
        color: "#fa9191",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        textShadow: "0px 2px 4px #ffe9cf",
        margin: "50px",
        fontFamily: "'Josefin Sans', sans-serif"
      }}
    >
      My name is {name}
    </h1>
    <div className="img_div">
      <img src={img1} alt="Random image" />
      <img src={img2} alt="Random image" />
      <img src={img3} alt="Random image" />
      <a href={link} target="_blank">
        <img src={img4} alt="Random image" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
