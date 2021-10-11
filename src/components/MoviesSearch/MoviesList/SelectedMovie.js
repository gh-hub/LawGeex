import { Backdrop, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { omdbApiKey } from "../../../config";
import { Loading } from "../../Base/Loading";
import { TextInformation } from "../../Base/TextInformation";
import { BaseInformation } from "./BaseInformation";

const KEYS_TO_IGNORE = ["Poster", "Year", "Title", "Ratings"];

export function SelectedMovie({ selectedMovieId, close, movieBaseInfo, cacheObj }) {
  const [fullMovieInfo, setFullMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setCache, cache } = cacheObj;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?i=${selectedMovieId}&apikey=${omdbApiKey}`);
      const data = await response.json();
      setIsLoading(false);
      setFullMovieInfo(data);
      setCache({ ...cache, [selectedMovieId]: data });
    };

    if (Object.keys(cache).includes(selectedMovieId)) setFullMovieInfo(cache[selectedMovieId]);
    else fetchData();
  }, [selectedMovieId]);

  const renderFullMovieInfo = () => {
    return Object.keys(fullMovieInfo)
      .filter((key) => !KEYS_TO_IGNORE.includes(key))
      .map((key) => {
        return (
          <div key={`${selectedMovieId}_${key}`}>
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
