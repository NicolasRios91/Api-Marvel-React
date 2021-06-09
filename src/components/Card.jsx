import React from "react";

const Card = ({ name, img }) => {
  return (
    <div class="App-Card">
      <a href="" className="App-Card-Link">
        <img src={img} alt="" class="App-Card-Image" />
        <label htmlFor="" className="App-Card-Name">
          {name}
        </label>
      </a>
    </div>
  );
};

export default Card;
