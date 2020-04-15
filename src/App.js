import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <section>
        <div className="NASAcard">
          {nasaDailyData && <h2>{nasaDailyData.title}</h2>}
          {nasaDailyData && <img src={nasaDailyData.url} />}
          {nasaDailyData && <p>{nasaDailyData.explanation}</p>}
          
        </div>
      </section>
      <foooter>{nasaDailyData && <p>{nasaDailyData.copyright} {nasaDailyData.date}</p>}</foooter>
    </div>
  );
}

export default App;
