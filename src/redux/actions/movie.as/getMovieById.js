import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';
export const getMovieById = (movieId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_MOVIE });
            const response = await MoviesService.getMovieById(movieId);
            const movie = response.data.results;
            dispatch({ type: EActionTypes.FETCH_MOVIE_SUCCESS, payload: movie });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_MOVIE_ERROR,
                payload: 'An error occurred while downloading movie',
            });
        }
    };
};
