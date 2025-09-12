// redux/actions/searchActions.js
export const SET_SEARCH = 'SET_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const setSearch = (term) => ({ type: SET_SEARCH, payload: term });
export const clearSearch = () => ({ type: CLEAR_SEARCH });
