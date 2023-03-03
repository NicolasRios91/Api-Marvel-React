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

const CharacterList = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(randomCharacter());
  const [data, setData] = useState(null);
  const [isFilteringFavs, setIsFilteringFavs] = useState(false);
  const [favsList, setFavsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { debouncedValue } = useDebounce(searchValue, 500);

  const handleChange = () => {
    setIsFilteringFavs(!isFilteringFavs);
    if (!isFilteringFavs) {
      setFavsList(JSON.parse(localStorage.getItem("favorite")));
    }
  };

  useEffect(() => {
    if (debouncedValue?.startsWith("http")) {
      const res = debouncedValue.split("/");
      const comicId = res[5];
      history.push("/comic", { comicId });
    }
    fetchList(debouncedValue)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((dataResponse) => {
        setData(dataResponse.data.results.slice(0, 8));
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedValue, history]);

  if (loading) return null;
  if (error) return "error..";

  return (
    <>
      <Header onChange={setSearchValue} img={marvel}></Header>

      <div className="character-list-container">
        <input
          id="favorite"
          type="checkbox"
          onChange={handleChange}
          checked={isFilteringFavs}
          className="checkBox-favorite"
        />

        <CardList
          characterList={data}
          filterFavs={isFilteringFavs}
          favsList={favsList}
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default CharacterList;
