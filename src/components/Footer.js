import React from "react";
import styled from "styled-components"
// import "../../src/App.css";


const StyleFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.bgColor ? props.bgColor : "navy"};
  color: white;
  margin-top: 3%;
  border-top: 1px solid white;
  word-spacing: 1rem;
`
const StyleCopyright = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`



function Footer({ copyright, date }) {
  return (
    <StyleFooter>
      <p><StyleCopyright>{copyright}</StyleCopyright>, {date}</p>
    </StyleFooter>
  );
}

export default Footer;
