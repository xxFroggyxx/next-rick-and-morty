'use client';

import React, { useState } from 'react';
import { useRickAndMortyCharacters } from '@/hooks/useRickAndMortyCharacters';
import { CharacterTypes } from '@/data/types';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useRickAndMortyCharacters(page);

  if (isError) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  const { info, results } = data;

  const handlePrevButton = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextButton = () => {
    const { pages } = info;
    if (page < pages) setPage((next) => next + 1);
  };

  const characters = results.map(({ id, name }: CharacterTypes) => <li key={id}>{name}</li>);

  return (
    <>
      <div className="flex gap-4">
        <button className="bg-red-600 p-2" onClick={handlePrevButton}>
          Prev Page
        </button>
        <button className="bg-green-600 p-2" onClick={handleNextButton}>
          Next Page
        </button>
      </div>
      <ul className="text-center">{characters}</ul>
    </>
  );
};
