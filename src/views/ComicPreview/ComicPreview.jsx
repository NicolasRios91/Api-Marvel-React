import "./ComicPreview.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { fetchComic } from "../../api/index";
import { months } from "../../utils";

const ComicPreview = () => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comic, setComic] = useState(null);
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [creators, setCreators] = useState();

  const formatCreators = (creators) => {
    let stringCreators = "";
    creators.forEach((element) => {
      stringCreators += `${element.role}: ${element.name} \n`;
    });
    return stringCreators;
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let day = newDate.getDate();
    let indexMonth = newDate.getMonth();
    let formattedDate = `${months[indexMonth]} ${day}, ${year}`;
    setDate(formattedDate);
  };

  const setValues = (comic) => {
    let stringCreators = formatCreators(comic.creators.items);
    let formattedCreators = stringCreators
      .split("\n")
      .map((str) => <p key={str}>{str}</p>);

    setComic(comic);
    setImage(comic.thumbnail.path + "." + comic.thumbnail.extension);
    formatDate(comic.dates[0].date);
    setCreators(formattedCreators);
    setLoading(false);
  };

  useEffect(() => {
    if (location.state.comic) {
      setValues(location.state.comic);
    } else {
      fetchComic(location.state.comicId)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((dataResponse) => {
          setValues(dataResponse.data.results[0]);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location.state.comic, location.state.comicId]);

  if (loading) return null;
  if (error) return "error..";

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
          <p className="comic-date">Published: {date}</p>
          <div className="comic-creators">{creators}</div>
          <p className="comic-description">{comic.description}</p>
        </div>
      </div>
    </>
  );
};

export default ComicPreview;
