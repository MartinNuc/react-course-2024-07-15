import axios from 'axios';
import { useCallback } from 'react';
import useSWR from 'swr';

type JokeResponse = {
  value: string;
};

export function useJoke(category?: string) {
  const fetcher = useCallback(
    (url: string) =>
      axios
        .get(url, {
          params: {
            category,
          },
        })
        .then((res) => res.data),
    [category]
  );

  const { data, isValidating } = useSWR<JokeResponse>(
    `https://api.chucknorris.io/jokes/random?${category}`,
    fetcher
  );

  return {
    isLoading: isValidating,
    joke: data?.value,
    refetch: () => {},
  };
}
