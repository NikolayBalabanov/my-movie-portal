import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';
export const getMovieTrailer = (movieId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_TRAILER });
            const response = await MoviesService.getTrailerByMovieId(movieId);
            const trailerLink = response.data.results[0]?.key;
            dispatch({ type: EActionTypes.FETCH_TRAILER_SUCCESS, payload: trailerLink });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_TRAILER_ERROR,
                payload: 'An error occurred while downloading trailer link',
            });
        }
    };
};
