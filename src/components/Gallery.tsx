"use client";

import React, { useState } from "react";
import { useRickAndMortyCharacters } from "@/hooks/useRickAndMortyCharacters";
import { Card } from "./Card";
import { Button } from "./Button";

interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}

interface CharacterTypes {
  id: number;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
}

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

  const characters = results.map(({ id, name, image }: CharacterTypes) => (
    <Card key={id} name={name} image={image} />
  ));

  return (
    <>
      <div className="m-8 grid place-items-center gap-8 md:m-6 md:grid-cols-2 lg:m-4 xl:grid-cols-4">
        {characters}
      </div>
      <div className="flex gap-8">
        <Button sign="<" onClick={handlePrevButton} />
        <Button sign=">" onClick={handleNextButton} />
      </div>
    </>
  );
};
