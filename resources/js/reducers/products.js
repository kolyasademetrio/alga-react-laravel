import { SET_PRODUCTS, SET_IS_READY, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_RECCOMENDED_PRODUCTS, FETCH_RECCOMENDED_PRODUCTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isReady: false,
    items: []
};


export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}