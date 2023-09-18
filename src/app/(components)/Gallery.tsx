"use client";

import React, { useState } from "react";
import { useRickAndMortyCharacters } from "@/hooks/useRickAndMortyCharacters";
import { CharacterTypes } from "@/data/types";
import { Card } from "./Card";
import { Button } from "./Button";

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
      <div className="flex gap-4">
        {/* <button className="bg-red-600 p-2" onClick={handlePrevButton}>
          &lt;
        </button> */}
        <Button sign="&lt;" onClick={handlePrevButton} />
        <Button sign="&gt;" onClick={handleNextButton} />
      </div>
    </>
  );
};
