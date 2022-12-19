import {Rating} from "./rating.model";

export type Film = {
  Title: string
  Year: number
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: number
  imdbRating: number
  imdbVotes: number
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: number
  Production: string
  Website: string
  Response: boolean
}

