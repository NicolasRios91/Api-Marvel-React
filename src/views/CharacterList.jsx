import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchList } from "../api";
import { randomCharacter } from "../utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useHistory } from "react-router-dom";
import marvel from "../img/bannerMarvel.jpg";

const CharacterList = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(randomCharacter());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (searchValue.startsWith("http")) {
      const res = searchValue.split("/");
      const comicId = res[5];
      history.push("/comic", { comicId });
    }
    fetchList(searchValue)
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
  }, [searchValue]);

  if (loading) return "Loading..";
  if (error) return "error..";

  return (
    <>
      <Header onChange={setSearchValue} img={marvel}></Header>
      <div className="App-Container">
        <CardList characterList={data}> </CardList>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CharacterList;
