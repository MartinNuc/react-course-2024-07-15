import { useJoke } from "./use-joke";

export function Joke() {

  const { joke, refetch, isLoading } = useJoke();

  return <>
    <p>{joke}</p>
    <button disabled={isLoading} onClick={refetch}>Load next</button>
  </>
}
