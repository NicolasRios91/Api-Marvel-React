import React from "react";
const Header = ({ onChange, img }) => {
  return (
    <header className="App-Header">
      <img src={img} alt="banner" />
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        id="App-Header-Search"
        placeholder="Search"
        results="0"
      ></input>
    </header>
  );
};
export default Header;
