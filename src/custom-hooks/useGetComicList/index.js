import { useState, useEffect, useCallback } from "react";
import { fetchComicList } from "../../api";

export const useGetComicList = (characterId) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getComicList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchComicList(characterId);
      const json = response.ok && (await response.json());
      setData(json.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [characterId]);

  useEffect(() => {
    getComicList();
  }, [getComicList]);

  return { data, isLoading, error };
};
