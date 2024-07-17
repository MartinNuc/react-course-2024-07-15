import { useParams } from "react-router-dom";
import { useJoke } from "./use-joke";

export function Joke() {
  const { category } = useParams();
  const { joke, refetch, isLoading } = useJoke(category);

  return <>
    <p>{joke}</p>
    <button disabled={isLoading} onClick={refetch}>Load next</button>
  </>
}
