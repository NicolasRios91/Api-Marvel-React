import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchComicList } from "../../api";
import { setComics } from "../../features/comics";

export const useGetComicList = (characterId) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const getComicList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchComicList(characterId);
      const json = response.ok && (await response.json());
      dispatch(setComics(json.data.results));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [characterId, dispatch]);

  useEffect(() => {
    getComicList();
  }, [getComicList]);

  return { isLoading, error };
};
