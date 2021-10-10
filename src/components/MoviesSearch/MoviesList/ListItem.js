import { Paper } from "@mui/material";
import { useState } from "react";
import { BaseInformation } from "./BaseInformation";
import { SelectedMovie } from "./SelectedMovie";

export function ListItem({ imageUrl, title, year, movieId }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  function close() {
    setSelectedMovieId(null);
  }

  return (
    <div className="movie-list-item-container">
      <Paper
        sx={{ display: "flex", alignItems: "center", width: "50rem" }}
        className="movie-info"
        onClick={() => setSelectedMovieId(movieId)}
      >
        <BaseInformation imageUrl={imageUrl} title={title} year={year} />
      </Paper>
      {selectedMovieId && (
        <SelectedMovie selectedMovieId={selectedMovieId} close={close} movieBaseInfo={{ imageUrl, title, year }} />
      )}
    </div>
  );
}
