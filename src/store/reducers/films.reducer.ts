import * as t from './../actions'
import {Film} from "../../types";


type FilmsState = {
  currentFilm: null | Film
  filmCard: Array<Film>
}

const initialState: FilmsState = {
  currentFilm: null,
  filmCard: [],
};
export const filmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case t.SET_CURRENT_FILM: {
      return { ...state, currentFilm: action.payload };
    }
    case t.SET_FILMS: {
      return { ...state, filmCard: action.payload.Search };
    }
    default:
      return state;
  }
};
