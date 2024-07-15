import axios from "axios";
import { useState, useEffect } from "react";

type JokeResponse = {
  value: string;
}

export function useJoke() {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setIsLoading(true);
    try {
      const response = await axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    joke,
    refetch: fetchJoke
  };
}
