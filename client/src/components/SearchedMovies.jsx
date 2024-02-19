import { useContext } from "react";
import { MoviesApiContext } from "../components/context/MoviesApiContext";

function SearchedMovies() {
  const { data } = useContext(MoviesApiContext);
  console.log(data);
  return (
    <>
      <h2>List of searched movies</h2>
      {data.map((item) => (
        <div className="url">{item.url}</div>
      ))}
    </>
  );
}

export default SearchedMovies;
