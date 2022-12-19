import * as t from './../actions'
import {Film, Filter} from "../../types";
import {FilmsActions} from "../actions";


type FilmsState = {
  currentFilm: null | Film
  films: Array<Film>
  page: number
  searchTerm: string
  searchedFilms: Array<Film>
  isLoading: boolean
  hasFilter: boolean
  filter: null | Filter
}

const initialState: FilmsState = {
  currentFilm: null,
  films: [],
  page: 0,
  searchTerm: '',
  searchedFilms: [],
  isLoading: false,
  hasFilter: false,
  filter: null,
};

export const filmsReducer = (state = initialState, action: FilmsActions): FilmsState => {
  switch (action.type) {
    case t.SET_CURRENT_FILM: {
      return {...state, currentFilm: action.payload};
    }
    case t.SET_FILMS: {
      return {...state, films: [...state.films, ...action.payload]};
    }
    case t.INC_PAGE_NUMBER: {
      return {...state, page: state.page + 1};
    }
    case t.RESET_PAGE_NUMBER: {
      return {...state, page: 0};
    }
    case t.RESET_FILMS_DATA: {
      return {...state, films: [], searchedFilms: []};
    }
    case t.RESET_SEARCH_TERM: {
      return {...state, searchTerm: ''};
    }
    case t.SET_SEARCH_TERM: {
      return {...state, searchTerm: action.payload};
    }
    case t.SET_SEARCHED_FILMS: {
      return {...state, searchedFilms: [...state.searchedFilms, ...action.payload]};
    }
    case t.SET_LOADING: {
      return {...state, isLoading: action.payload};
    }
    case t.SET_FILTER: {
      return {...state, filter: action.payload };
    }
    case t.SET_ACTIVE_FILTER: {
      return { ...state, hasFilter: !state.hasFilter};
    }
    default:
      return state;
  }
};



