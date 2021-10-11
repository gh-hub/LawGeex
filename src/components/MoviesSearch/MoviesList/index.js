import { useState } from "react";
import { Filter } from "./Filter";
import { ListItem } from "./ListItem";

const NO_MOVIES_MSG = "No movies was found";

export function MoviesList({ movies }) {
  const [year, setYear] = useState(null);
  const [cache, setCache] = useState({});

  if (movies.length === 0) return <div>{NO_MOVIES_MSG}</div>;
  const items = movies
    .filter((movie) => {
      if (!year) return true;
      return movie.Year === year;
    })
    .map((movie) => {
      const { Title, Poster, Year, imdbID } = movie;
      return (
        <ListItem
          key={imdbID}
          imageUrl={Poster}
          title={Title}
          year={Year}
          movieId={imdbID}
          cacheObj={{ cache, setCache }}
        />
      );
    });
  return (
    <>
      <Filter setYear={setYear} />
      <div>{items}</div>
    </>
  );
}
