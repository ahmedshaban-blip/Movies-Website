// src/redux/Reducers/i18nReducer.js
export const SET_LANG = 'i18n/setLang';

const initialLang =
  (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en';

const INITIAL = { lang: initialLang };

export default function i18nReducer(state = INITIAL, action) {
  switch (action.type) {
    case SET_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}

export const setLang = (lang) => ({ type: SET_LANG, payload: lang });
