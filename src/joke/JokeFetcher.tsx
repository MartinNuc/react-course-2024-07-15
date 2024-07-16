import { useJoke } from "./use-joke";

type JokeFetcherResult = {
  joke: string | undefined;
  isLoading: boolean;
}

type Props = {
  children: (result: JokeFetcherResult) => React.ReactNode
}

export function JokeFetcher({ children }: Props) {
  const { joke, isLoading } = useJoke();

  return <>
    <hr />
      {children({ joke, isLoading })}
    <hr />
  </>
}
