import {RootState} from "./store";

export const currentFilmSelector = (state: RootState) => state.films.currentFilm;
export const filmsSelector = (state: RootState) => state.films.films;
export const searchTermSelector = (state: RootState) => state.films.searchTerm;
export const searchedFilmsSelector = (state: RootState) => state.films.searchedFilms;
export const loadingSelector = (state: RootState) => state.films.loading;
export const filterSelector = (state: RootState) => state.films.filter;
export const sortByYearSelector = (state: RootState) => state.films.sortByYear;
export const filterSearchSelector = (state: RootState) => state.films.filterSearch;
export const searchYearFromSelector = (state: RootState) => state.films.searchYearFrom;
export const searchYearToSelector = (state: RootState) => state.films.searchYearTo;
