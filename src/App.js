import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./Components/ApodInfo";

function App() {
  const [apod, setApod] = useState([]);
  const [info, setInfo] = useState(``);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=WpPznJNV9aEIPZKlCfnAwvCDjhF8jNQuwzK8VX5e`
      )
      .then(response => {
        const apodImg = response.data.hdurl;
        console.log(response.data);
        setApod(apodImg);
      })
      .catch(err => {
        // console.log(err.message)
      });
  }, []);

  return (
    <div className="App">
      <Apodinfo />
      <img src={apod}></img>

      <p>
        EONET is the Earth Observatory Natural Event Tracker. EONET allows users
        to browse the entire globe daily and look for natural events as they
        occur. Regularly spotted storms in the tropics, dust storms over
        deserts, forest fires in the summers. These events are constantly
        occurring, and NASA NRT imagery can represent them all using a variety
        of different data parameters.
      </p>
    </div>
  );
}

export default App;
