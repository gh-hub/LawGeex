import { useState } from "react";
import { Filter } from "./Filter";
import { ListItem } from "./ListItem";

export function MoviesList({ movies }) {
  const [year, setYear] = useState(null);
  if (movies.length === 0) return <div>NO MOVIES WAS FOUND</div>;
  console.log(year);
  const items = movies
    .filter((movie) => {
      if (!year) return true;
      return movie.Year === year;
    })
    .map((movie) => {
      const { Title, Poster, Year, imdbID } = movie;
      return <ListItem key={imdbID} imageUrl={Poster} title={Title} year={Year} movieId={imdbID} />;
    });
  return (
    <>
      <Filter setYear={setYear} />
      <div>{items}</div>
    </>
  );
}
