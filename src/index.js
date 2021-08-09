
import React from "react";
import ReactDOM from "react-dom";

let currDate=new Date(2020,5,5,14);
currDate=currDate.getHours();
let greeting="";
const cssStyle={};
if(currDate>=1&&currDate<12){
  greeting="Morning";
  cssStyle.color='green';
}
else if(currDate>=12&&currDate<18){
  greeting="After";
  cssStyle.color='orange';
}
if(currDate>=18&&currDate<20){
  greeting="Evening";
  cssStyle.color='red';
}
if(currDate>=20&&currDate<24){
  greeting="night";
  cssStyle.color='yellow';
}
ReactDOM.render(
  <div>
    <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
  </div>
  , document.getElementById("root"));
