import {Dispatch} from "redux";

import * as t from './actions.types'
import {Film, Filter} from "../../types";
import {AppThunk, RootState} from "../store";
import {getCurrentFilm, getFilms, getFilteredFilms, getShowMoreFilms} from "../../api/films";

export const setCurrentFilmAC = (payload: Film) => {
  return {type: t.SET_CURRENT_FILM, payload} as const;
};
export const setFilmsAC = (payload: Array<Film>) => {
  return {type: t.SET_FILMS, payload} as const;
};
export const incPageNumberAC = () => {
  return {type: t.INC_PAGE_NUMBER} as const;
};
export const resetPageNumberAC = () => {
  return {type: t.RESET_PAGE_NUMBER} as const;
};
export const resetFilmsDataAC = () => {
  return {type: t.RESET_FILMS_DATA} as const;
};
export const resetSearchTermAC = () => {
  return {type: t.RESET_SEARCH_TERM} as const;
};
export const setSearchTermAC = (payload: string) => {
  return {type: t.SET_SEARCH_TERM, payload} as const;
};
export const setSearchedFilmsAC = (payload: Array<Film>) => {
  return {type: t.SET_SEARCHED_FILMS, payload} as const;
};
export const setLoadingAC = (payload: boolean) => {
  return {type: t.SET_LOADING, payload} as const;
};
export const setFilterAC = (payload: Filter) => {
  return {type: t.SET_FILTER, payload} as const;
};
export const setActiveFilterAC = () => {
  return {type: t.SET_ACTIVE_FILTER} as const;
};


export const getCurrentFilmTC = (imdbID: string): AppThunk => async (dispatch) => {
  try {
    const result = await getCurrentFilm(imdbID);
    dispatch(setCurrentFilmAC(result.data));
  } catch (e) {
    console.error(e)
  }
}

export const getFilmsTC = (): AppThunk => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(setLoadingAC(true));
  if (getState().films.page === 0) {
    dispatch(incPageNumberAC());
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
    dispatch(incPageNumberAC());
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
    if (result.data.Search) {
      dispatch(setSearchedFilmsAC(result.data.Search));
    }
    if (pageNumber === 0) {
      dispatch(incPageNumberAC());
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
    dispatch(incPageNumberAC());
    dispatch(setLoadingAC(false));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoadingAC(false));
  }
}

type setCurrentFilmAction = ReturnType<typeof setCurrentFilmAC>;
type setFilmsAction = ReturnType<typeof setFilmsAC>;
type incPageNumberAction = ReturnType<typeof incPageNumberAC>;
type resetPageNumberAction = ReturnType<typeof resetPageNumberAC>;
type resetFilmsDataAction = ReturnType<typeof resetFilmsDataAC>;
type resetSearchTermAction = ReturnType<typeof resetSearchTermAC>;
type setActiveFilterAction = ReturnType<typeof setActiveFilterAC>;
type setSearchTermAction = ReturnType<typeof setSearchTermAC>;
type setSearchedFilmsAction = ReturnType<typeof setSearchedFilmsAC>;
type setLoadingAction = ReturnType<typeof setLoadingAC>;
type setFilterAction = ReturnType<typeof setFilterAC>;

export type FilmsActions =
  setCurrentFilmAction | setFilmsAction | incPageNumberAction | resetPageNumberAction |
  resetFilmsDataAction | resetSearchTermAction  | setSearchTermAction |
  setSearchedFilmsAction | setLoadingAction | setActiveFilterAction | setFilterAction;
