import React, { useEffect, useState } from "react";
import { useDebounce } from "../../custom-hooks/useDebounce";
import marvel from "../../img/bannerMarvel.jpg";
import "./styles.css";

const Header = ({ getCharacters }) => {
  const [searchValue, setSearchValue] = useState();
  const { debouncedValue } = useDebounce(searchValue, 500);

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      getCharacters(debouncedValue);
    }
  }, [debouncedValue, getCharacters]);

  return (
    <header className="header-list">
      <img src={marvel} alt="banner" />
      <input
        type="text"
        onChange={handleOnChange}
        id="header-search"
        placeholder="Search"
        value={searchValue}
        results="0"
      ></input>
    </header>
  );
};
export default Header;
