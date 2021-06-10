import React, { useState } from "react";
import Modal from "./Modal";
const Card = ({ id, name, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="App-Card" onClick={() => setIsModalOpen(true)}>
        <img src={img} alt="" className="App-Card-Image" />
        <label htmlFor="" className="App-Card-Name">
          {name}
        </label>
      </div>

      {isModalOpen && (
        <Modal
          className="App-Card-Modal"
          characterName={name}
          characterId={id}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Card;
