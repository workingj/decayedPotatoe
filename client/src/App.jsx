import "./App.css";
import {useState} from "react";
import MoviesRates from "./components/MoviesRates";
import NavBar from "./components/NavBar";
import SearchedMovies from "./components/SearchedMovies";
import Title from "./components/Title";
import SelectedMovie from "./components/SelectedMovie.jsx";

 export default function App() {

  const [selectedMovie, setSelectedMovie] = useState({Title: "No movie selected"});

  return (
    <>
      <div className="topContainer">
        <Title />
        <NavBar />
      </div>
      <SelectedMovie
        movie={selectedMovie} />

      <div className="movieContainer">
        <SearchedMovies setSelectedMovie={setSelectedMovie}/>
      </div>
    </>
  );
}

