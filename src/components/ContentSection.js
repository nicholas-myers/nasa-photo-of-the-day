import React from "react";
import styled from "styled-components";
// import "../../src/App.css";

const StyleContentSection = styled.section`
  max-height: 100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const StyleNASAimg = styled.img`
  height: 100%;
  width: 100%;
  
`;

const StyleNASAcard = styled.div`
  position: absolute;
  border: 1px solid white;
  background-color: navy;
  padding: 1rem;
  border-radius: 1rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  opacity: 50%;
`;


function ContentSection(props) {
  const { title, url, explanation } = props;
  return (
    <StyleContentSection>
      <StyleNASAimg src={url} />
      <StyleNASAcard>
        <h2>{title}</h2>
        
        <p>{explanation}</p>
      </StyleNASAcard>
    </StyleContentSection>
  );
}

export default ContentSection;
