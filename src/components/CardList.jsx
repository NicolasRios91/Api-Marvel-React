import React from "react";
import Card from "./Card";

const showCards = (list) => {
  if (list) {
    if(list.length ===0) return <p>No characters found</p>
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
    return <p>No favourites found</p>;
  }
};

const CardList = ({ characterList, filterFavs, favsList }) => {
  return (
    <div className="card-list">
      {showCards(filterFavs ? favsList : characterList)}
    </div>
  );
};

export default CardList;
