import { MouseEventHandler } from "react";

interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}

export interface CharacterTypes {
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

export interface InfoTypes {
  count: number;
  pages: number;
  next: string;
  prev: number | null;
}

export interface CardProps {
  name: string;
  image: string;
}

export interface ButtonProps {
  sign: string;
  onClick: React.MouseEventHandler;
}
