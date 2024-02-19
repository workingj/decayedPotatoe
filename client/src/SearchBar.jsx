import { createContext, useContext } from "react";
import { MoviesApiContext } from "./components/context/MoviesApiContext";

function SearchBar() {
  const { data, userInput, setUserInput, setAllowFetch } =
    useContext(MoviesApiContext);
  return (
    <div>
      <label htmlFor="search">
        <input
          id="search "
          type="text"
          placeholder="Search for movies"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        🔎
      </label>
    </div>
  );
}

export default SearchBar;
