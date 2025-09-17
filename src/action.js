// src/redux/movies/actions.js
import axios from 'axios';

export const SET_SEARCH_TERM = 'movies/setSearchTerm';
export const SET_PAGE        = 'movies/setPage';
export const FETCH_START     = 'movies/fetchStart';
export const FETCH_SUCCESS   = 'movies/fetchSuccess';
export const FETCH_ERROR     = 'movies/fetchError';

export const setSearchTerm = (term) => ({ type: SET_SEARCH_TERM, payload: term });
export const setPage       = (page) => ({ type: SET_PAGE, payload: page });

const fetchStart   = () => ({ type: FETCH_START });
const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload }); // {items,totalPages}
const fetchError   = (message) => ({ type: FETCH_ERROR, payload: message });
const tmdbLang = (state) => (state?.i18n?.lang === 'ar' ? 'ar-SA' : 'en-US');

// Thunk
export const fetchMovies = (pageNumber, query) => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const apiKey = '29cf44b93ca83bf48d9356395476f7ad'; // يفضّل .env
 const lang = tmdbLang(getState());
    const url = query && query.trim()
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${pageNumber}&language=${lang}`
      : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageNumber}&language=${lang}`;

    const { data } = await axios.get(url);
    dispatch(fetchSuccess({
      items: data.results,
      totalPages: Math.min(data.total_pages ?? 1, 500),
    }));
  } catch (err) {
    dispatch(fetchError('Failed to load movies. Please check your connection.'));
    console.error('Error fetching movies:', err);
  }
};


// Helper to map UI lang -> TMDb locale (reuse this in fetchMovies too)

// NEW: localized "upcoming" fetch
export const fetchUpcomingMovies = (pageNumber) => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const apiKey = '29cf44b93ca83bf48d9356395476f7ad'; // move to .env later
    const lang = tmdbLang(getState());
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${pageNumber}&language=${lang}`;
    const { data } = await axios.get(url);
    dispatch(
      fetchSuccess({
        items: data.results,
        totalPages: Math.min(data.total_pages ?? 1, 500),
      })
    );
  } catch (err) {
    dispatch(fetchError('Failed to load movies. Please check your connection.'));
    console.error('Error fetching upcoming movies:', err);
  }
};
