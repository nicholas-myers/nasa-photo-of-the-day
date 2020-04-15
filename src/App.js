import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const [nasaDailyData, setNasaDailyData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=xf0GPFzVbb5SzSpoHha4wjo7igdUoiG0uejdqLFO"
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
      <Header />
      <section>
        <div className="NASAcard">
          {nasaDailyData && <h2>{nasaDailyData.title}</h2>}
          {nasaDailyData && <img src={nasaDailyData.url} />}
          {nasaDailyData && <p>{nasaDailyData.explanation}</p>}
          
        </div>
      </section>
      {nasaDailyData && <Footer copyright={nasaDailyData.copyright} date={nasaDailyData.date}/>}
    </div>
  );
}

export default App;
