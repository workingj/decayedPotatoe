import "./App.css";
import MoviesRates from "./components/MoviesRates";
import NavBar from "./components/NavBar";
import SearchedMovies from "./components/SearchedMovies";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="topContainer">
        <Title />
        <NavBar />
      </div>

      <div className="movieContainer">
        <SearchedMovies />
        <MoviesRates />
      </div>
    </>
  );
}

export default App;
