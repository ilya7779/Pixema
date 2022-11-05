import * as t from './../actions'
import {Film} from "../../types";
import {Dispatch} from "redux";

export const setCurrentFilmAC = (payload: Film) => {
  return {type: t.SET_CURRENT_FILM, payload};
};

export const setFilmsAC = (payload: Array<Film>) => {
  return {type: t.SET_FILMS, payload};
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
  return (dispatch: Dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=9ce5b90&s=kul`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(setFilmsAC(json))
    }).catch((error: any) => {
      console.log(error)
    });
  }
}