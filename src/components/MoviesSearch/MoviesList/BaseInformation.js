import { Typography } from "@mui/material";
import { TextInformation } from "../../TextInformation";

export function BaseInformation({ imageUrl, title, year }) {
  return (
    <div className="flex">
      <img src={imageUrl} alt={title} height="150" loading="lazy" />
      <TextInformation>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {year}
        </Typography>
      </TextInformation>
    </div>
  );
}
