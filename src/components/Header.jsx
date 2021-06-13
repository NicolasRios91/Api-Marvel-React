import React from "react";

const Header = ({ onChange, img }) => {
  return (
    <header className="header-list">
      <img src={img} alt="banner" />
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        id="header-search"
        placeholder="Search"
        results="0"
      ></input>

    </header>
  );
};
export default Header;
