import React from "react";
function Addition(a, b) {
  return (
    <>
      <h>{a + b}</h>
    </>
  );
}
function Subtraction(a, b) {
  return (
    <div>
      <p>{a - b}</p>
    </div>
  );
}
export { Addition, Subtraction };
