import "../ComicPreview.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { fetchComic } from "../api/index";

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

  const setValues = (comic) => {
    let stringCreators = formatCreators(comic.creators.items);
    let formattedCreators = stringCreators
      .split("\n")
      .map((str) => <p>{str}</p>);
    setComic(comic);
    setImage(comic.thumbnail.path + "." + comic.thumbnail.extension);
    setDate(comic.dates[0]);
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
  }, []);
  if (loading) return "Loading..";
  if (error) return "error..";

  return (
    <>
      <button onClick={() => history.push("/")}>Back</button>
      <div className="Comic-Preview-Content">
        <div className="Comic-Preview-Image">
          <img src={image} alt="comic Image" id="Comic-Image" />
        </div>
        <div className="Comic-Preview-Information">
          <h3>{comic.title}</h3>
          <p className="Comic-Preview-data">Published: {date.date}</p>
          <p className="Comic-Preview-data">{creators}</p>
          <p className="Comic-Preview-description">{comic.description}</p>
        </div>
      </div>
    </>
  );
};

export default ComicPreview;
