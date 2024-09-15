export interface IParams {
  page?: string;
  slug?: string;
}
export enum EnumMediaType {
  MOVIE = "movie",
  TV = "tv",
  PERSON = "person",
}

export interface IArticle {
  id: number;
  original_title: string;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  media_type: EnumMediaType.MOVIE | EnumMediaType.TV | EnumMediaType.PERSON;
  vote_average: number;
  video: boolean;
  first_air_date: string;
}

export interface IAllData {
  results: IArticle[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: 655011224;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
}
