import "./CharacterList.css";
import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CardList from "../../components/card-list";
import { useGetCharacters } from "../../custom-hooks/useGetCharacters";
import { Loader } from "../../components/loader";
import { useSelector } from "react-redux";

const CharacterList = () => {
  const [isFilteringFaves, setIsFilteringFaves] = useState(false);
  const [favesList, setFavesList] = useState(null);
  const { isLoading, error, getCharacters } = useGetCharacters();
  const data = useSelector((state) => state.characters.data);

  const handleChange = () => {
    setIsFilteringFaves(!isFilteringFaves);
    if (!isFilteringFaves) {
      setFavesList(JSON.parse(localStorage.getItem("favorite")));
    }
  };

  if (error) return "error..";

  return (
    <>
      <Loader isOpen={isLoading} />
      <Header getCharacters={getCharacters} />

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
