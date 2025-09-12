// rootReducer.js
import { combineReducers } from 'redux';
import favReducer from './Reducer';
import searchReducer from './searchReducer';
import moviesReducer from '../../reducer';

const rootReducer = combineReducers({
  fav: favReducer, // state.fav.items
  search: searchReducer,
    movies: moviesReducer,  

});

export default rootReducer;
