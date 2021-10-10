import { IconButton, InputBase, Paper } from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterAlt";

const SEARCH_YEAR = "Year";

export function Filter({ setYear }) {
  return (
    <div className="filter-container">
      <Paper sx={{ display: "flex", alignItems: "center", width: "12.5rem" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={`${SEARCH_YEAR}`}
          inputProps={{ "aria-label": `${SEARCH_YEAR}` }}
          type="number"
          onChange={(e) => setYear(e.target.value)}
        />

        <IconButton sx={{ p: "10px" }} aria-label="search">
          <FilterIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
