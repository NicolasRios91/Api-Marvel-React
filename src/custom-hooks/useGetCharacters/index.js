import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../../api";
import { setCharacters } from "../../features/characters";
import { randomCharacter } from "../../utils";

export const useGetCharacters = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const data = useSelector((state) => state.characters.data);
  const dispatch = useDispatch();

  const getCharacters = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const response = await fetchList(query);
        const jsonResponse = await response.json();
        dispatch(setCharacters(jsonResponse?.data?.results.slice(0, 8)));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (!data) {
      getCharacters(randomCharacter());
    }
  }, [data, getCharacters]);

  return { error, isLoading, getCharacters };
};
