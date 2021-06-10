import React from "react";

const Card = ({ name, img }) => {
  return (
    <div className="App-Card">
      <a href="" className="App-Card-Link">
        <img src={img} alt="" class="App-Card-Image"></img>
        <label htmlFor="" className="App-Card-Name">
          {name}
        </label>
      </a>
    </div>
  );
};

export default Card;
