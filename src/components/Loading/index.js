import { CircularProgress } from "@mui/material";

export function Loading({ active }) {
  if (!active) return <></>;
  return (
    <div className="loading-container">
      <CircularProgress color="inherit" />
    </div>
  );
}
