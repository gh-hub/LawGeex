import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { omdbApiKey, omdbId } from "../../config";

const SEARCH_FREE_TEXT = "Movie name";
const SEARCH_YEAR = "Year";

export function Search({ updateMovieList, updateIsLoading }) {
  function handleSubmit(event) {
    updateMovieList([]);
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get("name");
    const year = formData.get("year");

    const fetchData = async () => {
      updateIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?i=${omdbId}&apikey=${omdbApiKey}&s=${name}&page=1-20&y=${year}`
      );
      const data = await response.json();
      //   updateIsLoading(false);
      updateMovieList(data && data.Search);
    };

    fetchData();
  }

  return (
    <>
      <Paper component="form" sx={{ display: "flex", alignItems: "center", width: "50rem" }} onSubmit={handleSubmit}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`${SEARCH_FREE_TEXT}`}
          inputProps={{ "aria-label": `${SEARCH_FREE_TEXT}` }}
          name="name"
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase placeholder={`${SEARCH_YEAR}`} name="year" inputProps={{ "aria-label": `${SEARCH_YEAR}` }} />

        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}
