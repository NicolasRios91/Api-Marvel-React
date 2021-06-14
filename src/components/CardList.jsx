import React from "react";
import Card from "./Card";

const showCards = (list) => {
  console.log("show cards list", list);
  if (list) {
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
  console.log("characterList ", characterList);
  console.log("filterFavs ", filterFavs);
  console.log("favsList ", favsList);
  return (
    <div className="card-list">
      {showCards(filterFavs ? favsList : characterList)}
    </div>
  );
};

export default CardList;
