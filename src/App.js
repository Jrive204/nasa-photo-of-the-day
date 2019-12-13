import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./Components/ApodInfo";
import Apod from "./Components/Apod";
import styled from "styled-components";
import Forms from "./Components/Forms";
import { Button, divStyle, apod } from "./Components/style";

function App() {
  const [apod, setApod] = useState([]);
  const [info, setInfo] = useState(``);
  const [date, setDate] = useState(``);
  const [title, setTitle] = useState(``);

  const [count, setCount] = useState(2019);
  const [countday, setCountday] = useState(12);
  const [countmonth, setCountmonth] = useState(12);

  const [year, setYear] = useState(count);
  const [day, setDay] = useState(countday);
  const [month, setMonth] = useState(countmonth);

  const [photoOftheDay, setPhotoOftheDay] = useState(``);
  const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${nasakey}&date=${year}-${month}-${day}`
      )
      .then(response => {
        // const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

        const photoOftheDay = response.data;
        console.log(photoOftheDay);

        const apodImg = response.data.hdurl;
        const apodinfo = response.data.explanation;
        const apoddate = response.data.date;
        let apodtitle = response.data.title;

        // console.log(response.data);
        setApod(apodImg);
        setInfo(apodinfo);
        setDate(apoddate);
        setTitle(apodtitle);
      })
      .catch(err => {
        console.log(`Error:` + err);
        setPhotoOftheDay({
          copyright: ``,
          title: ``,
          explanation: `Sorry`,
          hdurl: `https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
        });
      });
  }, [year, month, day]);

  console.log(apod);

  const handleyrchange = e => {
    setCount(e.target.value);
    // setCountmonth(e.target.value);
    // setCountday(e.target.value);
  };
  const handledaychange = e => {
    // setCount(e.target.value);
    // setCountmonth(e.target.value);
    setCountday(e.target.value);
  };
  const handlemonthchange = e => {
    // setCount(e.target.value);
    setCountmonth(e.target.value);
    // setCountday(e.target.value);
  };

  const onSubmityr = event => {
    event.preventDefault();
    setCount(count);
  };
  const onSubmitdy = event => {
    event.prventDefault();
    setCountday(countday);
  };
  const onSubmitmth = event => {
    event.prventDefault();
    setCountmonth(countmonth);
  };

  var divStyle = {
    backgroundImage: `url(${apod})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  };

  console.log(`Date`, count, countday, countmonth);

  return (
    <div className='App' style={divStyle}>
      <Forms
        handledaychange={handledaychange}
        onSubmitdy={onSubmitdy}
        handlemonthchange={handlemonthchange}
        onSubmitmth={onSubmitmth}
        handleyrchange={handleyrchange}
        onSubmityr={onSubmityr}></Forms>

      <div className='formbuttondiv'>
        <Button
          primary
          onClick={e => {
            setYear(count);
            setMonth(countmonth);
            setDay(countday);
          }}>
          change Date
        </Button>
      </div>
      <div>
        <Apod apod={apod}></Apod>
        <Apodinfo info={info} date={date} title={title} />
      </div>
    </div>
  );
}

export default App;
