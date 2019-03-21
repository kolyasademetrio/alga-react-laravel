import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, SET_CATEGORY_FILTER } from './types';

export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products
});

export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    BESTSELLER: 'BESTSELLER',
    FACE: 'FACE',
    BODY: 'BODY',
    SCRUB: 'SCRUB',
};