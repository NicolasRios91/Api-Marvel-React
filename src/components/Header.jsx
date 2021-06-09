import React from "react";

const Header = ({ img }) => {
  return (
    <header class="App-Header">
      <img src={img} alt="banner" />
      <input type="text" placeholder="Search" id="App-Header-Search"></input>
    </header>
  );
};
export default Header;
