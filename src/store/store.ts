import {useDispatch} from "react-redux";
import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';

import {filmsReducer, authorizationReducer} from "./reducers";

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  traceLimit: 20,
  trace: true,
});

let middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares]; // здесь можно добавить мидлвары, необходимые только development
}

const rootReducer = combineReducers({
  films: filmsReducer,
  authorization: authorizationReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const useAppDispatch = useDispatch<AppDispatch>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
