import { Typography } from "@mui/material";

export function Title({ title }) {
  return (
    <Typography variant="h3" component="div" gutterBottom>
      {title}
    </Typography>
  );
}
