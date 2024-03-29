// Generated by https://quicktype.io

export interface Main {
  info: Info;
  results: Episode[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

enum Gender {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}
