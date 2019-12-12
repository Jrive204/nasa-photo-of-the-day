import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./Components/ApodInfo";
import Apod from "./Components/Apod";

function App() {
  const [apod, setApod] = useState([]);
  const [info, setInfo] = useState(``);
  const [date, setDate] = useState(``);
  const [title, setTitle] = useState(``);
  const nasakey = `WpPznJNV9aEIPZKlCfnAwvCDjhF8jNQuwzK8VX5e`;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${nasakey}`)
      .then(response => {
        const apodImg = response.data.hdurl;
        const apodinfo = response.data.explanation;
        const apoddate = response.data.date;
        let apodtitle = response.data.title;

        console.log(response.data);
        setApod(apodImg);
        setInfo(apodinfo);
        setDate(apoddate);
        setTitle(apodtitle);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='App'>
      <Apod apod={apod}></Apod>
      <Apodinfo info={info} date={date} title={title} />

      <p></p>
    </div>
  );
}

export default App;
