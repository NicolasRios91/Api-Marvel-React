import "../ComicPreview.css";
import React from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import marvel from "../img/bannerMarvel.jpg";

const ComicPreview = () => {
  const location = useLocation();
  const comic = location.state.comic;
  const img = comic.thumbnail.path + "." + comic.thumbnail.extension;
  const date = comic.dates[0];

  const creators = comic.creators.items;
  const creatorsValues = creators.map((element) => {
    let value = {};
    value["name"] = element["name"];
    value["role"] = element["role"];
    return value;
  });

  let stringCreators = "";
  creatorsValues.forEach((element) => {
    stringCreators += `${element.role}: ${element.name} \n`;
  });
  const newText = stringCreators.split("\n").map((str) => <p>{str}</p>);
  return (
    <>
      <Header img={marvel}></Header>
      <div className="Comic-Preview-Content">
        <div className="Comic-Preview-Image">
          <img src={img} alt="comic Image" id="Comic-Image" />
        </div>
        <div className="Comic-Preview-Description">
          <p>{comic.title}</p>
          <br />
          <p>Published: {date.date}</p>
          <p>{newText}</p>
        </div>
      </div>
    </>
  );
};

export default ComicPreview;
