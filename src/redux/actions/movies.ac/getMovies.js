import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';
import { EMoviesFilter } from '../../../types/EMoviesFilter';
export const getMovies = (query = EMoviesFilter.popular) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_MOVIES });
            const response = await MoviesService.getPopular(query);
            const movies = response.data.results;
            dispatch({ type: EActionTypes.FETCH_MOVIES_SUCCESS, payload: movies });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_MOVIES_ERROR,
                payload: 'An error occurred while downloading movies',
            });
        }
    };
};
