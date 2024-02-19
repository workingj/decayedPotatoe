import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function MoviesRates() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate, number) => {
    setRating(rate);
  };
  const handleReset = () => {
    setRating(0);
  };

  return (
    <div>
      <h2>Rating of the movies</h2>
      <Rating onClick={handleRating} initialValue={rating} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default MoviesRates;
