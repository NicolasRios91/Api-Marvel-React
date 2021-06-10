import React from "react";

const Header = ({ onChange, img }) => {
  return (
    <header className="App-Header">
      <img src={img} alt="banner" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </header>
  );
};
export default Header;
