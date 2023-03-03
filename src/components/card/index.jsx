import React, { useState, useEffect } from "react";
import Modal from "../modal";
import "./styles.css";

const Card = ({ id, name, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardChecked, setIsCardChecked] = useState(false);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList?.some((e) => e.id === id)) {
      setIsCardChecked(true);
    }
  }, [id]);

  const handleChange = () => {
    setIsCardChecked(!isCardChecked);
    let favList = JSON.parse(localStorage.getItem("favorite"));
    if (!isCardChecked) {
      if (favList) {
        favList.push({ id: id, name: name, img: img });
        localStorage.setItem("favorite", JSON.stringify(favList));
      } else {
        localStorage.setItem(
          "favorite",
          JSON.stringify([{ id: id, name: name, img: img }])
        );
      }
    } else {
      favList = favList.filter((element) => {
        return element.id !== id;
      });
      localStorage.setItem("favorite", JSON.stringify(favList));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card-container">
        <section id="star-checkbox">
          <input
            type="checkbox"
            onChange={() => handleChange()}
            checked={isCardChecked}
            className="checkBox-character"
          />
        </section>
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
