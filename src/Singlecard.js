import React, { useState } from "react";
import { apiPrefix } from "./App";
import Detailview from "./Detailview";
import img from "./images/img.jpg";

export default function Singlecard({ elm }) {
  const [movie, setMovie] = useState();
  const fullView = (id) => {
    fetch(`${apiPrefix}&i=${id}&plot=full`)
      .then((elm) => elm.json())
      .then((elm) => {
        setMovie(elm);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="column">
        <div className="card">
          <img
            src={elm.Poster === "N/A" ? img : elm.Poster}
            alt={elm.Title}
            style={{ width: "100%" }}
          />
          <div className="container">
            <h2>{elm.Title}</h2>
            <p className="title">{elm.Type}</p>
            <p>{elm.Year}</p>
            {/* <p>{elm.imdbID}</p> */}
            <p>
              <button
                className="button"
                onClick={() => {
                  fullView(elm.imdbID);
                }}
              >
                View Details
              </button>
            </p>
          </div>
        </div>
      </div>
      {movie && <Detailview movie={movie} setMovie={setMovie} />}
    </>
  );
}
