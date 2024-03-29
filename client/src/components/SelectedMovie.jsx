import React, {useState} from 'react';
import MoviesRates from './MoviesRates';

const SelectedMovie = ({movie}) => {

    const [submitted, setSubmitted] = useState(false);
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
        setSubmitted(true);
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
    <div className='selectedMovie'>
        <h1>{movie.Title}</h1>
        <h2>Rating is {rating}/5 Stars</h2>
        <MoviesRates
        rating={rating}
        setRating={setRating} 
        handleRating={handleRating}
        handleReset={handleReset}
        />
        <button onClick={() => postMovieRating()}>Submit</button>

        {submitted ? (
            <h2>Rating Submitted</h2>
        ) : (
            <h2>Click Submit to Rate</h2>
        )}

    </div>
  )
}

export default SelectedMovie