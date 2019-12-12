import React from "react";
import "../App.css";

function Apod(props) {
  return (
    <div>
      {/* <h1>Astrononmy Picture of the Day </h1> */}
      <img src={props.apod}></img>
    </div>
  );
}
export default Apod;
