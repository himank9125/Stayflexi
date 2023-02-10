import React from "react";
import img from "./images/img.jpg";

export default function Detailview({ movie, setMovie }) {
  return (
    <div className="overlay">
      <div className="model">
        <div
          className="close"
          onClick={() => {
            setMovie("");
          }}
        >
          <b>x</b>
        </div>
        <div className="modelcard">
          <img
            src={movie.Poster === "N/A" ? img : movie.Poster}
            alt="mypic"
            style={{ width: "20%" }}
          />
          <h1>{movie.Title}</h1>
          <p className="modeltitle">Release Year: {movie.Year}</p>
          <p className="modeltitle">Rating: {movie.imdbRating}</p>

          <p>
            {movie.Plot.length >= 50
              ? `${movie.Plot.substring(0, 400)}....`
              : `${movie.Plot}`}
          </p>
        </div>
      </div>
    </div>
  );
}
