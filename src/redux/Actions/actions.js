// // actions.js
// import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';

// // thunk action creator
// export function fetchMovies() {
//   return async (dispatch, getState) => {
   
//     const { movies } = getState();
//     if (movies.loading) return; 

//     dispatch({ type: FETCH_MOVIES_REQUEST });

//     try {
//       const res = await fetch('https://api.example.com/movies');
//       if (!res.ok) throw new Error('Network response not ok');
//       const data = await res.json();
//       dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
//       return data;
//     } catch (err) {
//       dispatch({ type: FETCH_MOVIES_FAILURE, payload: err.message });
//       throw err; 
//     }
//   };
// }




