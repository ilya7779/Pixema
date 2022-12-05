import * as t from './../actions'
import {Film} from "../../types";
import {Dispatch} from "redux";
import {AppThunk, RootState} from "../store";
import {getCurrentFilm, getFilms, getFilteredFilms, getShowMoreFilms} from "../../api/films";

export const setCurrentFilmAC = (payload: Film) => {
  return {type: t.SET_CURRENT_FILM, payload};
};
export const setFilmsAC = (payload: Array<Film>) => {
  return {type: t.SET_FILMS, payload};
}
export const IncPageNumberAC = () => {
  return {type: t.INC_PAGE_NUMBER};
}
export const resetPageNumberAC = () => {
  return {type: t.RESET_PAGE_NUMBER};
}
export const resetFilmsDataAC = () => {
  return {type: t.RESET_FILMS_DATA};
}
export const resetSearchTermAC = () => {
  return {type: t.RESET_SEARCH_TERM};
}
export const setActiveFilterAC = () => {
  return {type: t.SET_ACTIVE_FILTER};
}
export const setSearchTermAC = (payload: string) => {
  return {type: t.SET_SEARCH_TERM, payload};
}
export const setSearchedFilmsAC = (payload: Array<Film>) => {
  return {type: t.SET_SEARCHED_FILMS, payload};
}
export const setLoadingAC = (payload: boolean) => {
  return {type: t.SET_LOADING, payload};
}
export const setSortByYearAC = (payload: boolean) => {
  return {type: t.SET_SORT_BY_YEAR, payload};
}
export const setFilterSearchAC = (payload: string) => {
  return {type: t.SET_FILTER_SEARCH, payload};
}
export const setSearchYearFromAC = (payload: string) => {
  return {type: t.SET_SEARCH_YEAR_FROM, payload};
}
export const setSearchYearToAC = (payload: string) => {
  return {type: t.SET_SEARCH_YEAR_TO, payload};
}


export const getCurrentFilmTC = (imdbID: string): AppThunk => async (dispatch) => {
  try {
    const result = await getCurrentFilm(imdbID);
    console.log(result)

    dispatch(setCurrentFilmAC(result.data));
  } catch (e) {
    console.error(e)
  }
}

export const getFilmsTC = (): AppThunk => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoadingAC(true));
  if (getState().films.page === 0) {
    dispatch(IncPageNumberAC());
  }
  const pageNumber = getState().films.page;
  try {
    const result = await getFilms(pageNumber);
    dispatch(setFilmsAC(result.data.Search))
  } catch (e) {
    console.error(e)
  } finally {
    dispatch(setLoadingAC(false));
  }
}

export const getShowMoreFilmsTC = (): AppThunk => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoadingAC(true));
  const pageNumber = getState().films.page;
  try {
    const result = await getShowMoreFilms(pageNumber);
    dispatch(IncPageNumberAC());
    dispatch(setFilmsAC(result.data.Search));
    dispatch(setLoadingAC(false));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoadingAC(false));
  }
}

export const getFilteredFilmsTC = (): AppThunk => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoadingAC(true));
  const searchTerm = getState().films.searchTerm;
  const pageNumber = getState().films.page;
  try {
    const result = await getFilteredFilms({searchTerm, pageNumber});
    dispatch(setSearchedFilmsAC(result.data.Search));
    if (pageNumber === 0) {
      dispatch(IncPageNumberAC());
    }
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoadingAC(false));
  }
}

export const getShowMoreFilteredFilmsTC = (): AppThunk => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoadingAC(true));
    const searchTerm = getState().films.searchTerm;
    const pageNumber = getState().films.page;
  try {
    const result = await getFilteredFilms({searchTerm, pageNumber});
    dispatch(setSearchedFilmsAC(result.data.Search))
    dispatch(IncPageNumberAC());
    dispatch(setLoadingAC(false));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoadingAC(false));
  }
}
