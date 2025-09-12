// store.js
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Reducers/combineReducers';
import { thunk } from 'redux-thunk';



const store = createStore(rootReducer,applyMiddleware(thunk) );
export default store;
