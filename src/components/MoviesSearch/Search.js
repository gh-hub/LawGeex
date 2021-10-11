import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { omdbApiKey, omdbId } from "../../config";
import { useState } from "react";

const SEARCH_FREE_TEXT = "Movie name";

export function Search({ updateMovieList, updateIsLoading }) {
  const [cache, setCache] = useState({});
  function handleSubmit(event) {
    updateMovieList(null);
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get("name");

    const fetchData = async () => {
      updateIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?i=${omdbId}&apikey=${omdbApiKey}&s=${name}&type=movie`);
      const data = await response.json();
      updateIsLoading(false);
      const updateMovieListItem = (data && data.Search) || [];
      updateMovieList(updateMovieListItem);
      setCache({ ...cache, [name]: updateMovieListItem });
    };

    if (Object.keys(cache).includes(name)) updateMovieList(cache[name]);
    else fetchData();
  }

  return (
    <div className="search-container">
      <Paper component="form" sx={{ display: "flex", alignItems: "center" }} onSubmit={handleSubmit}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`${SEARCH_FREE_TEXT}`}
          inputProps={{ "aria-label": `${SEARCH_FREE_TEXT}` }}
          name="name"
        />

        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
