import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from "./actions/types";


const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)) );


export default store;