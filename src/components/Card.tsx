import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export const Card = ({ name, image }: Props) => {
  return (
    <div className="flex h-96 w-auto flex-col rounded-b-lg border-2 border-sky-500 text-center">
      <div className="">
        <Image
          src={image}
          alt={`Image of ${name}`}
          width={275}
          height={275}
          priority
        />
      </div>
      <div className="flex h-full items-center justify-center font-bold">
        {name}
      </div>
    </div>
  );
};
