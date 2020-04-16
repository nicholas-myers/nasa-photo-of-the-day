import React from "react";
import styled from "styled-components";
// import "../../src/App.css";

const StyleNASAimg = styled.img`
  width: 700px;
  height: 500px;
`;

function ContentSection(props) {
  const { title, url, explanation } = props;
  return (
    <section className="content">
      <div className="NASAcard">
        <h2>{title}</h2>
        <StyleNASAimg src={url} />
        <p>{explanation}</p>
      </div>
    </section>
  );
}

export default ContentSection;
