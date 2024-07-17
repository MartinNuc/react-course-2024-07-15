import axios from "axios";
import { useState, useEffect, useCallback } from "react";

type JokeResponse = {
  value: string;
}

export function useJoke(category?: string) {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = useCallback(async function fetchJoke() {
    setIsLoading(true);
    try {
      const search = new URLSearchParams();
      if (category) { 
        search.set('category', category);
      }
      const response = await axios.get<JokeResponse>(`https://api.chucknorris.io/jokes/random`, {
        params: search
      });
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return {
    isLoading,
    joke,
    refetch: fetchJoke
  };
}
