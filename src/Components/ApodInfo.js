import React from "react";
import "../App.css";

function Apodinfo(props) {
  return (
    <div>
      <h1>Astrononmy Picture of the Day </h1>
      <h2>{props.title}</h2>
      <p className='date'> {props.apoddate} </p>
      <p>{props.info}</p>
    </div>
  );
}

export default Apodinfo;
