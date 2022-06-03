import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from "redux";

import { searchReducer } from "../reducers/searchReducer";
import { spinnerReducer } from '../reducers/spinnerReducer';
import { itemsReducer } from '../reducers/itemsReducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const reducers = combineReducers({
    searchBoxes: searchReducer,
    spinner: spinnerReducer,
    productList: itemsReducer
});


export const store = createStore(
    reducers,
    enhancer
);