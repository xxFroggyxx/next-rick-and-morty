import useSWR from 'swr';

export const useRickAndMortyCharacters = () => {
  const fetcher = (url: string) => fetch(url).then((response) => response.json());
  const { data, error, isLoading } = useSWR(`https://rickandmortyapi.com/api/character`, fetcher);

  return { data, isError: error, isLoading };
};
