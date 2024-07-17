import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';

type JokeResponse = {
  value: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useJoke(category?: string) {
  const searchParams = new URLSearchParams();
  if (category) {
    searchParams.set('category', category);
  }

  const { mutate } = useSWRConfig();

  const cacheKey = `https://api.chucknorris.io/jokes/random?${searchParams.toString()}`;

  const { data, isValidating } = useSWR<JokeResponse>(cacheKey, fetcher, { suspense: true });

  return {
    isLoading: isValidating,
    joke: data?.value,
    refetch: () => mutate(cacheKey),
  };
}
