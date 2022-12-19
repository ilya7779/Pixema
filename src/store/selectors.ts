import {RootState} from "./store";

export const currentFilmSelector = (state: RootState) => state.films.currentFilm;
export const filmsSelector = (state: RootState) => state.films.films;
export const searchTermSelector = (state: RootState) => state.films.searchTerm;
export const searchedFilmsSelector = (state: RootState) => state.films.searchedFilms;
export const loadingSelector = (state: RootState) => state.films.isLoading;
export const filterSelector = (state: RootState) => state.films.filter;
export const hasFilterSelector = (state: RootState) => state.films.hasFilter;


export const authorizationUserEmailSelector = (state: RootState) => state.authorization.authorizationUserEmail;
export const authorizationUserPasswordSelector = (state: RootState) => state.authorization.authorizationUserPassword;
export const registrationUserNameSelector = (state: RootState) => state.authorization.registrationUserName;
export const registrationUserEmailSelector = (state: RootState) => state.authorization.registrationUserEmail;
export const registrationUserPasswordSelector = (state: RootState) => state.authorization.registrationUserPassword;
export const registrationConfirmUserPasswordSelector = (state: RootState) => state.authorization.registrationConfirmUserPassword;
export const userEmailSelector = (state: RootState) => state.authorization.userEmail;
export const userIDSelector = (state: RootState) => state.authorization.userID;
export const userTokenSelector = (state: RootState) => state.authorization.userToken;
