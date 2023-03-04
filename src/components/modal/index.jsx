import { useHistory } from "react-router-dom";
import { useGetComicList } from "../../custom-hooks/useGetComicList";
import { Loader } from "../loader";
import "./styles.css";

const Modal = ({ characterId, characterName, setIsOpen }) => {
  const history = useHistory();

  const { data, error, isLoading } = useGetComicList(characterId);

  if (error) return "error..";

  return (
    <>
      <Loader isOpen={isLoading} />
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <p id="modal-characterName">{characterName}</p>
            <button onClick={() => setIsOpen(false)} id="btn-close-modal">
              X
            </button>
          </div>
          <div className="modal-itemList">
            {data?.length > 0 ? (
              data?.map((comic) => {
                let img =
                  comic.thumbnail.path + "." + comic.thumbnail.extension;
                let comicTitle = comic.title;
                let description = comic.description;
                return (
                  <div key={comic.id} className="modal-item-container">
                    <div
                      className="modal-item"
                      onClick={() => history.push("/comic", { comic })}
                    >
                      <img
                        src={img}
                        alt={comic.title}
                        className="modal-image"
                      />
                    </div>
                    <div className="modal-info">
                      <p id="modal-comicTitle">{comicTitle}</p>
                      <br />
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 style={{ margin: "auto" }}>No comics found</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
