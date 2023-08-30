'use client';
import React from 'react';
import { useRickAndMortyCharacters } from '@/hooks/useRickAndMortyCharacters';
import { CharacterTypes } from '@/data/types';

export const Gallery = () => {
  const { data, isError, isLoading } = useRickAndMortyCharacters();

  if (isError) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  const { info, results } = data;
  const characters = results.map(({ id, name }: CharacterTypes) => <li key={id}>{name}</li>);

  return <ul>{characters}</ul>;
};
