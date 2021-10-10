import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { MoviesList } from "./MoviesList";
import { Search } from "./Search";

export function MoviesSearch(props) {
  const [movies, setMoviesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function updateMovieList(movies) {
    setMoviesList(movies);
  }
  function updateIsLoading(status) {
    setIsLoading(status);
  }
  return (
    <>
      <Search updateMovieList={updateMovieList} updateIsLoading={updateIsLoading} />
      {isLoading && <CircularProgress color="inherit" />}
      <MoviesList movies={movies} />
    </>
  );
}
