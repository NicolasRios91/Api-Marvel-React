import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ id, name, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="card" onClick={() => setIsModalOpen(true)}>
        <img src={img} alt="" className="card-image" />
        <label htmlFor="" className="card-name">
          {name}
        </label>
      </div>

      {isModalOpen && (
        <Modal
          className="card-modal"
          characterName={name}
          characterId={id}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Card;
