import * as t from './../actions'
import {Film} from "../../types";


type FilmsState = {
  currentFilm: null | Film
  films: Array<Film>
  page: number
  searchTerm: string
  searchedFilms: Array<Film>
  loading: boolean
  filter: boolean
}

const initialState: FilmsState = {
  currentFilm: null,
  films: [],
  page: 0,
  searchTerm: '',
  searchedFilms: [],
  loading: false,
  filter: false,
};

export const filmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case t.SET_CURRENT_FILM: {
      return { ...state, currentFilm: action.payload };
    }
    case t.SET_FILMS: {
      return { ...state, films: [...state.films, ...action.payload] };
    }
    case t.INC_PAGE_NUMBER: {
      return { ...state, page: state.page + 1};
    }
    case t.RESET_PAGE_NUMBER: {
      return { ...state, page: 0};
    }
    case t.RESET_FILMS_DATA: {
      return { ...state, films: [], searchedFilms: []};
    }
    case t.RESET_SEARCH_TERM: {
      return { ...state, searchTerm: ''};
    }
    case t.SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload};
    }
    case t.SET_SEARCHED_FILMS: {
      return { ...state, searchedFilms: [...state.searchedFilms, ...action.payload]};
    }
    case t.SET_LOADING: {
      return { ...state, loading: action.payload};
    }
    case t.SET_ACTIVE_FILTER: {
      console.log(state.filter)
      return { ...state, filter: !state.filter};
    }
    default:
      return state;
  }
};
