import { useJoke } from "./use-joke";

export function Joke() {

  const {joke, refetch} = useJoke();

  return <>
    <p>{joke}</p>
    <button onClick={refetch}>Load next</button>
  </>
}
