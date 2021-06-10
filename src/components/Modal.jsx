import React, { useState, useEffect } from "react";
import { fetchComicList } from "../api";

const Modal = ({ characterId, characterName, setIsOpen }) => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchComicList(characterId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((dataResponse) => {
        setData(dataResponse.data.results);
        console.log(dataResponse);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading..";
  if (error) return "error..";
  return (
    <div className="App-Modal">
      <button onClick={() => setIsOpen(false)}>Close</button>
      <p id="App-Modal-character-name">{characterName}</p>
      {data.map((element) => {
        let img = element.thumbnail.path + "." + element.thumbnail.extension;
        let comicTitle = element.title;
        let description = element.description;
        return (
          <>
            <div className="App-modal-item-container">
              <div className="App-modal-item">
                <img src={img} alt="modal-image" className="App-modal-image" />
              </div>
              <div className="App-modal-content">
                <p>{comicTitle}</p>
                <p>{description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Modal;
