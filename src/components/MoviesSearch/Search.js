import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { omdbApiKey, omdbId } from "../../config";

const SEARCH_FREE_TEXT = "Movie name";

export function Search({ updateMovieList, updateIsLoading }) {
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
      updateMovieList((data && data.Search) || []);
    };

    fetchData();
  }

  return (
    <div className="search-container">
      <Paper component="form" sx={{ display: "flex", alignItems: "center", width: "50rem" }} onSubmit={handleSubmit}>
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
