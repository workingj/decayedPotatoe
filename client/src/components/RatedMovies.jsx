import React from 'react'

const RatedMovies = () => {

    const fetchRatedMovies = async () => {
        try {
            const res = await fetch('http://localhost:3001/');
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchRatedMovies();

  return (
    <div>
        <h2>Rated Movies</h2>

        <div className='ratedMovies'>
            <div className='ratedMovie'>

            </div>
        </div>

    </div>
  )
}

export default RatedMovies