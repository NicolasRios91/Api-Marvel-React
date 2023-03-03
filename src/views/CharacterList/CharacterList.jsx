import "./CharacterList.css";
import React, { useState, useEffect } from "react";
import { fetchList } from "../../api";
import { randomCharacter } from "../../utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import { useHistory } from "react-router-dom";
import marvel from "../../img/bannerMarvel.jpg";
import { useDebounce } from "../../custom-hooks/useDebounce";
import { useGetCharacters } from "../../custom-hooks/useGetCharacters";

const CharacterList = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(randomCharacter());
  const [isFilteringFaves, setIsFilteringFaves] = useState(false);
  const [favesList, setFavesList] = useState(null);

  const { debouncedValue } = useDebounce(searchValue, 500);
  const { data, isLoading, error } = useGetCharacters(debouncedValue);

  const handleChange = () => {
    setIsFilteringFaves(!isFilteringFaves);
    if (!isFilteringFaves) {
      setFavesList(JSON.parse(localStorage.getItem("favorite")));
    }
  };

  if (isLoading) return "loading...";
  if (error) return "error..";

  return (
    <>
      <Header onChange={setSearchValue} img={marvel}></Header>

      <div className="character-list-container">
        <input
          id="favorite"
          type="checkbox"
          onChange={handleChange}
          checked={isFilteringFaves}
          className="checkBox-favorite"
        />

        <CardList
          characterList={data}
          filterFaves={isFilteringFaves}
          favesList={favesList}
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default CharacterList;
