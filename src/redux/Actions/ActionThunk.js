
export function fetchMovies() {

    return async (dispatch) => {

        dispatch({ type: 'FETCH_MOVIES_REQUEST',
            
         });
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=29cf44b93ca83bf48d9356395476f7ad`);
            const data = await response.json();
            dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: data.results });
        } catch (error) {
            dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
        }


    }


}