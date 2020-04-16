import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import "./App.css";

////set the url
const baseNASAurl = "https://api.nasa.gov/planetary/apod?api_key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO"
const todaysDate = "2020-04-15"


const StyleHeader = styled.header`
  width: 100%;
  background-color: navy;
  border-bottom: 1px solid white;
  margin-bottom: 3%;
  padding: 3%;
`
const RandomizeButton = styled.button`
font-size: 2rem;
  border-radius: 1rem;
  border:  none;
  padding: 1rem;
  box-shadow: 0 0 .25rem .25rem silver;
  color: navy;
  background-color: lightblue;
`

function App() {
  const [nasaDailyData, setNasaDailyData] = useState(null);
  const [picDate, setPicDate] = useState(todaysDate)
  
  const clickHandler = () => {
    function randomDate(minYear, maxYear, minMonth, maxMonth, minDay, maxDay) {
      const calendarYear = Math.floor(
        Math.random() * (maxYear - minYear) + minYear
      );
      const calendarMonth = Math.floor(
        Math.random() * (maxMonth - minMonth) + minMonth
      );
      const calendarDay = Math.floor(Math.random() * (maxDay - minDay) + minDay);
      const calendarDate = `${calendarYear}-${calendarMonth}-${calendarDay}`;
    
      return calendarDate;
    }
    setPicDate(randomDate(1995, 2020, 6, 4, 16, 14))
  }

  useEffect(() => {
    axios
      .get(
        `${baseNASAurl}&date=${picDate}`
      )
      .then((res) => {
        setNasaDailyData(res.data);
        console.log("you clicked")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [picDate]);


  console.log({picDate})

  // console.log(nasaDailyData)
  // https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg
  // api key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO

  return (
    <div className="App">
      <StyleHeader>
        <h1>NASA PHOTO OF THE DAY</h1>
        <RandomizeButton onClick={clickHandler}>
          Random Pic
        </RandomizeButton>
      </StyleHeader>
      {nasaDailyData && (
        <ContentSection
          title={nasaDailyData.title}
          url={nasaDailyData.url}
          explanation={nasaDailyData.explanation}
        />
      )}
      {nasaDailyData && (
        <Footer copyright={nasaDailyData.copyright} date={nasaDailyData.date} />
      )}
    </div>
  );
}

export default App;
