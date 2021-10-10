import { Paper, Typography } from "@mui/material";

export function ListItem({ imageUrl, title, year }) {
  return (
    <div className="movie-list-item-container">
      <Paper sx={{ display: "flex", alignItems: "center", width: "50rem" }} className="movie-info">
        <img src={imageUrl} alt={title} height="150" loading="lazy" />
        <div className="text-information">
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {year}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
