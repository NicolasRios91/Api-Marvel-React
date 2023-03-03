import { useCallback, useEffect, useState } from "react";
import { fetchList } from "../../api";

export const useGetCharacters = (query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = useCallback(async () => {
    try {
      const response = await fetchList(query);
      const jsonResponse = await response.json();
      setData(jsonResponse?.data?.results.slice(0, 8));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    getCharacters(query);
  }, [query, getCharacters]);

  return { data, error, isLoading, getCharacters };
};
