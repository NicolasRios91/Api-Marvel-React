import React from "react";
import Card from "../card";
import "./styles.css";

const showCards = (list) => {
  if (list) {
    if (list.length === 0) return <p>No characters found</p>;
    return list.map((element) => {
      let img =
        element.img ||
        element.thumbnail.path + "." + element.thumbnail.extension;
      return (
        <Card
          id={element.id}
          key={element.id}
          name={element.name}
          img={img}
        ></Card>
      );
    });
  } else {
    return <p>No favorites found</p>;
  }
};

const CardList = ({ characterList, filterFaves, favesList }) => {
  return (
    <div className="card-list">
      {showCards(filterFaves ? favesList : characterList)}
    </div>
  );
};

export default CardList;
