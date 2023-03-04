import "./ComicPreview.css";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useGetComics } from "../../custom-hooks/useGetComics";
import { Loader } from "../../components/loader";

const ComicPreview = () => {
  const location = useLocation();
  const history = useHistory();
  const { comic: data, comicId } = location.state;

  const { isLoading, error, comic, image, date, creators } = useGetComics(
    data,
    comicId
  );

  if (error) return "error..";

  return (
    <>
      <Loader isOpen={isLoading} />
      <nav className="comic-navigation">
        <button id="back-btn" onClick={() => history.push("/")}>
          &#8249;
        </button>
      </nav>
      <div className="comic-container">
        <div className="comic-image">
          <img src={image} alt={comic.title} id="Comic-Image" />
        </div>
        <div className="comic-info">
          <h3>{comic.title}</h3>
          <section className="comic-date">
            <p>Published: {date}</p>
          </section>
          <div className="comic-creators">{creators}</div>
          <section className="comic-description">
            <p>{comic.description}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ComicPreview;
