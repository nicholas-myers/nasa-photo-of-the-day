import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import "./App.css";

////set the url
const baseNASAurl = "https://api.nasa.gov/planetary/apod?api_key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO"
const todaysDate = "2020-04-15"


function App() {
  const [nasaDailyData, setNasaDailyData] = useState(null);
  const [picDate, setPicDate] = useState(todaysDate)
  
  useEffect(() => {
    axios
      .get(
        `${baseNASAurl}&date=${picDate}`
      )
      .then((res) => {
        setNasaDailyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(nasaDailyData)
  // https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg
  // api key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO

  return (
    <div className="App">
      <header>
        <h1>NASA PHOTO OF THE DAY</h1>
        <button className="randomize">
          Random Date
        </button>
      </header>
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
