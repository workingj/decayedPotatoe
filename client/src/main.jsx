import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MoviesApiContextProvider from "./components/context/MoviesApiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesApiContextProvider>
      <App />
    </MoviesApiContextProvider>
  </React.StrictMode>
);
