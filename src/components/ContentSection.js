import React from "react";
import "../../src/App.css";

function ContentSection(props) {
   const { title, url, explanation } = props
  return (
    <section className="content">
        <div className="NASAcard">
          <h2>{title}</h2>
          <img src={url} />
          <p>{explanation}</p>
        </div>
      </section>
  );
}

export default ContentSection;