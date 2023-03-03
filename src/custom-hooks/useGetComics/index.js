import { useCallback, useEffect, useState } from "react";
import { fetchComic } from "../../api";
import { formatCreators, formatDate } from "../../utils";

export const useGetComics = (data, comicId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comic, setComic] = useState(null);
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [creators, setCreators] = useState();

  const setValues = useCallback(() => {
    let stringCreators = formatCreators(data.creators.items);
    let formattedCreators = stringCreators
      .split("\n")
      .map((str) => <p key={str}>{str}</p>);

    setComic(data);
    setImage(data.thumbnail.path + "." + data.thumbnail.extension);
    setDate(formatDate(data.dates[0].date));
    formatDate(data.dates[0].date);
    setCreators(formattedCreators);
    setIsLoading(false);
  }, [data]);

  const getComics = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchComic(comicId);
      const json = await response.json();
      setValues(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [comicId, setValues]);

  useEffect(() => {
    if (data) {
      setValues(data);
    } else {
      getComics();
    }
  }, [data, getComics, setValues]);

  return { isLoading, error, comic, image, date, creators };
};
