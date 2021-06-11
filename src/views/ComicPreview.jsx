import React from "react";
import { useLocation } from "react-router";

const ComicPreview = () => {
  const location = useLocation();
  const comic = location.state.comic;
  return (
    <div>
      <label htmlFor="">{comic.title}</label>
    </div>
  );
};

export default ComicPreview;
