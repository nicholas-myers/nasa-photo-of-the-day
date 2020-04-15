import React from "react";
import "../../src/App.css";

function Header() {
  return (
    <header>
      <h1>NASA PHOTO OF THE DAY</h1>
      <button className="randomize" onClick={event => {
          
      }}>Random Date</button>
    </header>
  );
}

export default Header;
