import React, { useState, useEffect } from "react";
import { fetchList } from "../api/api";
import Card from "./Card";

const CardList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchList()
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
  }, []);
  console.log("RESPONSE resultados ", data);
  if (loading) return "Loading..";
  if (error) return "error..";
  return (
    <div class="App-Card-List">
      {data.map((element) => {
        let img = element.thumbnail.path + "." + element.thumbnail.extension;
        return <Card key={element.name} name={element.name} img={img}></Card>;
      })}
    </div>
  );
};

export default CardList;
