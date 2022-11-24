import * as t from './../actions'
import {Film} from "../../types";
import {Dispatch} from "redux";
import {RootState} from "../store";

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


export const getCurrentFilmTC = (imdbID: string) => {
  return (dispatch: Dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&i=${imdbID}`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(setCurrentFilmAC(json))
    }).catch((error: any) => {
      console.log(error)
    });
  }
}

export const getFilmsTC = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setLoadingAC(true));
    if (getState().films.page === 0) {
      dispatch(IncPageNumberAC());
    }
    const pageNumber = getState().films.page;
    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&s=new&page=${pageNumber}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(setFilmsAC(json.Search))
      })
      .catch((error: any) => {
        console.log(error)
      })
      .finally(() => {
        dispatch(setLoadingAC(false));
      });
  }
}

export const getShowMoreFilmsTC = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setLoadingAC(true));
    const pageNumber = getState().films.page;

    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&s=new&page=${pageNumber + 1}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(IncPageNumberAC());
        dispatch(setFilmsAC(json.Search));
        dispatch(setLoadingAC(false));
      })
      .catch((error: any) => {
        dispatch(setLoadingAC(false));
        console.log(error)
      });
  }
}

export const getFilteredFilmsTC = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setLoadingAC(true));
    const searchTerm = getState().films.searchTerm;
    const pageNumber = getState().films.page;

    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&s=${searchTerm}&page=${pageNumber + 1}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(setSearchedFilmsAC(json.Search))
        if (pageNumber === 0) {
          dispatch(IncPageNumberAC());
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
      .finally(() => {
        dispatch(setLoadingAC(false));
      });
  }
}

export const getShowMoreFilteredFilmsTC = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setLoadingAC(true));
    const searchTerm = getState().films.searchTerm;
    const pageNumber = getState().films.page;

    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&s=${searchTerm}&page=${pageNumber + 1}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(setSearchedFilmsAC(json.Search))
        dispatch(IncPageNumberAC());
        dispatch(setLoadingAC(false));
      })
      .catch((error: any) => {
        dispatch(setLoadingAC(false));
        console.log(error)
      });
  }
}
