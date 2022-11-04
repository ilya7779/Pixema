import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk'

//import {booksReducer} from './reducers';
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  //books: booksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // devToolsEnhancer(),
));

// export const Dispatch = useDispatch();