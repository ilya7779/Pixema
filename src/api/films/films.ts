import { api } from '../api';
import type {
  GetCurrentFilmRequest,
  GetCurrentFilmResult,
  GetFilmsRequest,
  GetFilmsResult,
  GetFilteredFilmsRequest, GetFilteredFilmsResult,
  GetShowMoreFilmsRequest, GetShowMoreFilmsResult,
} from './types';

export const getCurrentFilm = (imdbID: GetCurrentFilmRequest) => {
  return api.get<GetCurrentFilmResult>(`?i=${imdbID}`);
};

export const getFilms = (pageNumber: GetFilmsRequest) => {
  const params = { s: "new", page: pageNumber }
  return api.get<GetFilmsResult>(``, { params: params });
};

export const getShowMoreFilms = (pageNumber: GetShowMoreFilmsRequest) => {
  return api.get<GetShowMoreFilmsResult>(`?s=new&page=${pageNumber + 1}`);
};

export const getFilteredFilms = (data: GetFilteredFilmsRequest) => {
  const { searchTerm, pageNumber } = data;
  return api.get<GetFilteredFilmsResult>(`?s=${searchTerm}&page=${pageNumber + 1}`);
};


