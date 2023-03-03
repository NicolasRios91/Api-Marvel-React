import { useHistory } from "react-router-dom";
import { useGetComicList } from "../../custom-hooks/useGetComicList";
import "./styles.css";

const Modal = ({ characterId, characterName, setIsOpen }) => {
  const history = useHistory();

  const { data, error, isLoading } = useGetComicList(characterId);

  //TODO add loader and error modal
  if (isLoading) return null;
  if (error) return "error..";

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <p id="modal-characterName">{characterName}</p>
          <button onClick={() => setIsOpen(false)} id="btn-close-modal">
            X
          </button>
        </div>
        <div className="modal-itemList">
          {data?.map((comic) => {
            let img = comic.thumbnail.path + "." + comic.thumbnail.extension;
            let comicTitle = comic.title;
            let description = comic.description;
            return (
              <div key={comic.id} className="modal-item-container">
                <div
                  className="modal-item"
                  onClick={() => history.push("/comic", { comic })}
                >
                  <img src={img} alt={comic.title} className="modal-image" />
                </div>
                <div className="modal-info">
                  <p id="modal-comicTitle">{comicTitle}</p>
                  <br />
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
