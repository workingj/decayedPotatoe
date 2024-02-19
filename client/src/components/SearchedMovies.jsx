import { useContext, useState } from "react";
import { MoviesApiContext } from "../components/context/MoviesApiContext";

function SearchedMovies({setSelectedMovie}) {
  let { data } = useContext(MoviesApiContext);
  const [loading, setLoading] = useState(true);

  data = data.Search;

  const highlightMovie = (e, movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2>List of searched movies</h2>

      <div className="resultsDiv">

         {data ? (
          data.map((movie) => {
            return (
              <div className="movieCard" key={movie.imdbID} onClick={() => highlightMovie(event, movie)}>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
            );
          })
         ) : (
            <p>No movies found</p>
          )}

      </div>

    </div>
  );
}

export default SearchedMovies;
