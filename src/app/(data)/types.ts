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
