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

export const authorizationUserEmailSelector = (state: RootState) => state.authorization.authorizationUserEmail;
export const authorizationUserPasswordSelector = (state: RootState) => state.authorization.authorizationUserPassword;
export const registrationUserNameSelector = (state: RootState) => state.authorization.registrationUserName;
export const registrationUserEmailSelector = (state: RootState) => state.authorization.registrationUserEmail;
export const registrationUserPasswordSelector = (state: RootState) => state.authorization.registrationUserPassword;
export const registrationConfirmUserPasswordSelector = (state: RootState) => state.authorization.registrationConfirmUserPassword;
