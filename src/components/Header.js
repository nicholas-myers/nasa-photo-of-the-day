import React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
  width: 100%;
  background-color: navy;
  border-bottom: 1px solid white;
  margin-bottom: 3%;
  padding-bottom: 1rem;
`;
const RandomizeButton = styled.button`
  font-size: 2rem;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  box-shadow: 0 0 0.25rem 0.25rem silver;
  color: navy;
  background-color: lightblue;
`;

function Header({ clickHandler }) {
  return (
    <StyleHeader>
      <h1>NASA PHOTO OF THE DAY</h1>
      <RandomizeButton onClick={clickHandler}>Random Pic</RandomizeButton>
    </StyleHeader>
  );
}

export default Header;
