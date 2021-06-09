import React from "react";
import Card from "./Card";

const CardList = ({ characterList }) => {
  return (
    <div className="App-Card-List">
      {characterList?.map((element) => {
        let img = element.thumbnail.path + "." + element.thumbnail.extension;
        return <Card key={element.name} name={element.name} img={img}></Card>;
      })}
    </div>
  );
};

export default CardList;
