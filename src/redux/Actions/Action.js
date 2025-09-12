// actions.js
import { ADD_FAV, REMOVE_FAV, CLEAR_FAV } from '../constants';

export const addFav = (movie) => ({ type: ADD_FAV, payload: movie });
export const removeFav = (id)   => ({ type: REMOVE_FAV, payload: id });
export const clearFav = ()      => ({ type: CLEAR_FAV });
