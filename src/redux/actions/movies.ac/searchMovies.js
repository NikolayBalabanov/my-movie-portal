import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';
export const searchMovies = (search) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.SEARCH_MOVIES });
            const response = await MoviesService.searchMovie(search);
            const movies = response.data.results;
            dispatch({ type: EActionTypes.SEARCH_MOVIES_SUCCESS, payload: movies });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.SEARCH_MOVIES_ERROR,
                payload: 'An error occurred while downloading movies (search)',
            });
        }
    };
};
