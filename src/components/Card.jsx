import React from "react";

const Card = ({ name, img }) => {
  return (
    <div class="App-Card">
      <img src={img} alt="" class="App-Card-Image" />
      <label htmlFor="">{name}</label>
    </div>
  );
};

export default Card;
