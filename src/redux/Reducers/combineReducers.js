// rootReducer.js
import { combineReducers } from 'redux';
import favReducer from './Reducer';
import searchReducer from './searchReducer';
import moviesReducer from '../../reducer';
import i18nReducer from './i18nReducer';
const rootReducer = combineReducers({
  fav: favReducer, 
  search: searchReducer,
    movies: moviesReducer,  
  movies: moviesReducer,
  i18n: i18nReducer, 

});

export default rootReducer;
