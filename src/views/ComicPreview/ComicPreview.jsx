import "./ComicPreview.css";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import {
  formatCreators,
  formatDate,
  formatSeparateCreators,
} from "../../utils";

const ComicPreview = () => {
  const location = useLocation();
  const history = useHistory();
  const { comic } = location.state;

  let creators = formatCreators(comic.creators.items);
  let separateCreators = formatSeparateCreators(creators);
  let image = comic.thumbnail.path + "." + comic.thumbnail.extension;
  let date = formatDate(comic.dates[0].date);

  return (
    <>
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
          <div className="comic-creators">{separateCreators}</div>
          <section className="comic-description">
            <p>{comic.description}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ComicPreview;
