// redux/reducers/searchReducer.js
import { SET_SEARCH, CLEAR_SEARCH } from '../Actions/searchActions';

const INITIAL = { term: '' };

export default function searchReducer(state = INITIAL, action) {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, term: action.payload };
    case CLEAR_SEARCH:
      return { ...state, term: '' };
    default:
      return state;
  }
}
