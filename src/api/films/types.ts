import type { Film, Authorization } from '../../types';
import {getFilteredFilms, getShowMoreFilms} from "./films";
/////////////// import type { Book, BookFull } from '../../types';

// Requests
export type GetCurrentFilmRequest = string;
export type GetFilmsRequest = number;
export type GetShowMoreFilmsRequest = number;
export type GetFilteredFilmsRequest = {searchTerm: string, pageNumber: number};

// Results
export type GetCurrentFilmResult = Film;
export type GetFilmsResult = {Search: Film[], totalResults: string }
export type GetShowMoreFilmsResult = {Search: Film[], totalResults: string };
export type GetFilteredFilmsResult = {Search: Film[], totalResults: string };
// export type GetFilmsResult = { films: Film[], page: number };
// export type SearchBooksResult = { books: Book[], page: string, total: string, };
