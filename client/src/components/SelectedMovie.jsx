import React, {useState} from 'react';
import MoviesRates from './MoviesRates';

const SelectedMovie = ({movie}) => {


    const [rating, setRating] = useState(0);
    const handleRating = (rate, number) => {
      setRating(rate);
    };
    const handleReset = () => {
      setRating(0);
    };

    let myMovieRating = {};

    const createMovieRating = () => {
        myMovieRating = {
            title: movie.Title,
            rating: rating
        }
        console.log(myMovieRating);
    };  

    const postMovieRating = async () => {
        createMovieRating();
        try {
            const res = await fetch('http://localhost:3001/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(myMovieRating)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
        {movie.Title}
        <h1>Rating is {rating}/5 Stars</h1>
        <MoviesRates
        rating={rating}
        setRating={setRating} 
        handleRating={handleRating}
        handleReset={handleReset}
        />
        <button onClick={() => postMovieRating()}>Submit</button>

    </div>
  )
}

export default SelectedMovie