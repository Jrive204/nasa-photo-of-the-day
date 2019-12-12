import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./Components/ApodInfo";
import Apod from "./Components/Apod";
import styled from "styled-components";

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

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? "blue" : "white")};
    color: ${props => (props.primary ? "white" : "blue")};

    display: block;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
  `;

  // const yes = e => {
  //   setYear(count + 1);
  // };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${nasakey}&date=${year}-${month}-${day}`
      )
      .then(response => {
        const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

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
    setCountmonth(e.target.value);
    setCountday(e.target.value);
    // setYear(count - 1);
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
    backgroundImage: "url(" + apod + ")",
    width: "100%",
    height: "100vh"
  };

  console.log(`Date`, count, day, month);

  return (
    <div className='App' style={divStyle}>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-evenly`,
          padding: `1%`
        }}>
        <form onSubmit={onSubmityr}>
          {/* <label>Year</label> */}
          <input
            placeholder={`Year`}
            type='text'
            name='year'
            onChange={handleyrchange}
          />
        </form>
        <Button primary onClick={e => setYear(count)}>
          change year
        </Button>
        <form onSubmit={onSubmitmth}>
          <input type='text' name='month' onChange={handleyrchange} />
        </form>
        <Button primary onClick={e => setMonth(countmonth)}>
          change month
        </Button>
        <form onSubmit={onSubmitdy}>
          <input type='text' name='day' onChange={handleyrchange} />
        </form>
        <Button primary onClick={e => setDay(countday)}>
          change day
        </Button>
      </div>

      <Apod apod={apod}></Apod>
      <Apodinfo info={info} date={date} title={title} />

      <p></p>
    </div>
  );
}

export default App;
