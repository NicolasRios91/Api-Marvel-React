import React from "react";

const Header = ({ onChange }) => {
  return (
    <header className="App-Header">
      <img src="" alt="" />
      <input type="text" onChange={(e) => onChange(e.target.value)}></input>
    </header>
  );
};
export default Header;
