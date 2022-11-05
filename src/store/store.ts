import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {useDispatch} from "react-redux";
import {filmsReducer} from "./reducers";

const rootReducer = combineReducers({
  films: filmsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // devToolsEnhancer(),
));

export const useAppDispatch = useDispatch<AppDispatch>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
