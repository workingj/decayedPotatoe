import { createContext, useState, useEffect } from "react";

export const MoviesApiContext = createContext();

export default function MoviesApiContextProvider(props) {
  const [userInput, setUserInput] = useState([]);
  const [allowFetch, setAllowFetch] = useState(false);

  const api = `http://hn.algolia.com/api/v1/search?query=${userInput}`;

  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        if (allowFetch) {
          const res = await fetch(api);
          const resData = await res.json();

          console.log(resData);
          setData(resData);
          setAllowFetch(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [allowFetch, userInput]);

  return (
    <MoviesApiContext.Provider
      value={{ data, userInput, setUserInput, setAllowFetch }}
    >
      {props.children}
    </MoviesApiContext.Provider>
  );
}
