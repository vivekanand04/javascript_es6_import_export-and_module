import React from "react";
import ReactDOM from "react-dom";
import pi, { doublepi, triplepi } from "./math.js";
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>//we have taken doublepi() instead of doublepi because
    it is function
    <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
);

//method2
// import React from "react";
// import ReactDOM from "react-dom";
// import * as pi from "./math.js";  //here * as pi means import everything from math.js
// ReactDOM.render(
//   <ul>
//     <li>{pi.default }</li>
//     <li>{pi.doublepi()}</li>
//     <li>{pi.triplepi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
