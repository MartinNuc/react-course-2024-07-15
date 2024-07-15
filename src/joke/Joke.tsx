import { useJoke } from "./use-joke";

export function Joke() {

  const {joke} = useJoke();

  return <p>{joke}</p>
}