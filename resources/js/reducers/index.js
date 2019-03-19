import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import productFilter from './filter';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    filter: productFilter,
});