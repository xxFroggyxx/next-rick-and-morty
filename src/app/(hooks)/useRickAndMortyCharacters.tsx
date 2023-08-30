import useSWR from 'swr';

export const useRickAndMortyCharacters = (page: number = 1) => {
  const fetcher = (url: string) => fetch(url).then((response) => response.json());
  const { data, error, isLoading } = useSWR(`https://rickandmortyapi.com/api/character/?page=${page}`, fetcher);

  return { data, isError: error, isLoading };
};
