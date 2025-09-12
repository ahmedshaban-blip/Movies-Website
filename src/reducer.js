// src/redux/movies/reducer.js
import {
  SET_SEARCH_TERM, SET_PAGE,
  FETCH_START, FETCH_SUCCESS, FETCH_ERROR,
} from './action';

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
  loading: false,
  error: null,
  searchTerm: '',
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
        page: 1,          
      };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case FETCH_START:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        totalPages: action.payload.totalPages,
      };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
