import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Card = ({ id, name, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardChecked, setIsCardChecked] = useState(false);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favourites"));
    if (favList?.some((e) => e.id === id)) {
      setIsCardChecked(true);
    }
  }, [id]);

  const handleChange = () => {
    setIsCardChecked(!isCardChecked);
    let favList = JSON.parse(localStorage.getItem("favourites"));
    if (!isCardChecked) {
      if (favList) {
        favList.push({ id: id, name: name, img: img });
        localStorage.setItem("favourites", JSON.stringify(favList));
      } else {
        localStorage.setItem(
          "favourites",
          JSON.stringify([{ id: id, name: name, img: img }])
        );
      }
    } else {
      favList = favList.filter((element) => {
        return element.id !== id;
      });
      localStorage.setItem("favourites", JSON.stringify(favList));
    }
  };

  return (
    <>
      <div className="card-container">
        <input
          type="checkbox"
          onChange={() => handleChange()}
          checked={isCardChecked}
          className="checkBox-character"
        />
        <div className="card" onClick={() => setIsModalOpen(true)}>
          <img src={img} alt="" className="card-image" />

          <label htmlFor="" className="card-name">
            {name}
          </label>
        </div>
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
