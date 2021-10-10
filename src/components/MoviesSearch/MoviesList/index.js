import { ListItem } from "./ListItem";

export function MoviesList({ movies }) {
  if (movies.length === 0) return <div>NO MOVIES WAS FOUND</div>;
  const items = movies.map((movie) => {
    const { Title, Poster, Year, imdbID } = movie;
    return <ListItem key={imdbID} imageUrl={Poster} title={Title} year={Year} />;
  });
  return <div>{items}</div>;
}
