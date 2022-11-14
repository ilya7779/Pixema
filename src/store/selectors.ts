import {RootState} from "./store";

export const currentFilmSelector = (state: RootState) => state.films.currentFilm;
export const filmsSelector = (state: RootState) => state.films.films;
export const searchTermSelector = (state: RootState) => state.films.searchTerm;
export const searchedFilmsSelector = (state: RootState) => state.films.searchedFilms;
export const loadingSelector = (state: RootState) => state.films.loading;
