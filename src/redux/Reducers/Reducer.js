// favReducer.js
import { ADD_FAV, REMOVE_FAV, CLEAR_FAV } from '../constants';

const INITIAL = { items: [] };

export default function favReducer(state = INITIAL, action) {
  switch (action.type) {
    case ADD_FAV: {
      const exists = state.items.some(m => m.id === action.payload.id);
      if (exists) return state; // منع التكرار
      return { ...state, items: [...state.items, action.payload] };
    }
    case REMOVE_FAV:
      return { ...state, items: state.items.filter(m => m.id !== action.payload) };
    case CLEAR_FAV:
      return { ...state, items: [] };
    default:
      return state;
  }
}
