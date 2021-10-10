import { useState } from "react";
import { Loading } from "../Loading";
import { MoviesList } from "./MoviesList";
import { Search } from "./Search";

export function MoviesSearch() {
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
      <Loading active={isLoading} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
