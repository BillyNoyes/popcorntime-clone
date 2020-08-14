import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Body.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Body({ fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="body">
      <div className="body__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="body__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="body__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="body__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="body__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
