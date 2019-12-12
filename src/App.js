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
  const [count, setCount] = useState(2018);
  const [year, setYear] = useState(count);
  const [month, setMonth] = useState(12);
  const [day, setDay] = useState(11);
  const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

  const yes = e => {
    setYear(count + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${nasakey}&date=${year}-${month}-${day}`
      )
      .then(response => {
        const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

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
        console.log(err.message, `sorry`);
      });
  }, [count, year]);

  const handleyrchange = e => {
    setCount(e.target.value);
    // setYear(count - 1);
  };

  const onSubmityr = event => {
    event.prventDefault();
    setCount(count);
  };

  console.log(`hello`, count, year);

  return (
    <div className='App'>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-evenly`,
          padding: `1%`
        }}>
        <form onSubmit={onSubmityr}>
          <input type='text' name='year' onChange={handleyrchange} />
        </form>
        <form>
          <input type='text' name='month' onChange={``} />
          <button type='submit'>change month</button>
        </form>
        <form>
          <input type='text' name='day' onChange={``} />
          <button type='submit'>change day</button>
        </form>
      </div>

      <button onClick={e => setYear(count)}>change year</button>

      <Apod apod={apod}></Apod>
      <Apodinfo info={info} date={date} title={title} />

      <p></p>
    </div>
  );
}

export default App;
