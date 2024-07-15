import axios from "axios";
import { useState, useEffect } from "react";

type JokeResponse = {
  value: string;
}

export function useJoke() {
  const [joke, setJoke] = useState<string>();

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random').then(
      response => setJoke(response.data.value)
    );
  }

  return {
    joke,
    refetch: fetchJoke
  };
}
