import "./App.css";
import React from "react";

const Poster = ({img, title, text }) => {
  return (
    <div className="poster">
      <img src={img} alt="logo" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Poster;
