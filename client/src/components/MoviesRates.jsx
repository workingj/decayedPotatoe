import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function MoviesRates({rating, setRating, handleRating, handleReset}) {

  return (
    <div>
      <h2>Rating of the movies</h2>
      <Rating onClick={handleRating} initialValue={rating} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default MoviesRates;
