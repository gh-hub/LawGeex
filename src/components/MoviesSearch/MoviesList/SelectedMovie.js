import { Backdrop, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { omdbApiKey } from "../../../config";
import { Loading } from "../../Loading";
import { TextInformation } from "../../TextInformation";
import { BaseInformation } from "./BaseInformation";

export function SelectedMovie({ selectedMovieId, close, movieBaseInfo }) {
  const [fullMovieInfo, setFullMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?i=${selectedMovieId}&apikey=${omdbApiKey}`);
      const data = await response.json();
      setIsLoading(false);
      setFullMovieInfo(data);
    };

    fetchData();
  }, [selectedMovieId]);

  console.log(fullMovieInfo);

  const renderFullMovieInfo = () => {
    return Object.keys(fullMovieInfo).map((key) => {
      if (key === "Poster" || key === "Year" || key === "Title" || key === "Ratings") return <></>;
      return (
        <div>
          {key}: {fullMovieInfo[key]}
        </div>
      );
    });
  };

  const ratings = () => {
    if (!fullMovieInfo || !fullMovieInfo.Ratings) return <></>;
    const rates = fullMovieInfo.Ratings.map((rate) => (
      <div>
        {rate.Source}: {rate.Value}
      </div>
    ));

    return (
      <div>
        <div>Rating:</div>
        <div>{rates}</div>
      </div>
    );
  };

  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} onClick={close}>
      <Paper sx={{ alignItems: "center", width: "50rem", height: "50rem" }}>
        <TextInformation>
          <BaseInformation imageUrl={movieBaseInfo.imageUrl} title={movieBaseInfo.title} year={movieBaseInfo.year} />
        </TextInformation>
        <Loading active={isLoading} />
        {fullMovieInfo && (
          <div>
            <TextInformation>{ratings()}</TextInformation>
            <TextInformation>{renderFullMovieInfo()}</TextInformation>
          </div>
        )}
      </Paper>
    </Backdrop>
  );
}
