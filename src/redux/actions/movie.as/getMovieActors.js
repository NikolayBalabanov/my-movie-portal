import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';
export const getMovieActors = (movieId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_MOVIE_ACTORS });
            const response = await MoviesService.getActorsByMovieId(movieId);
            const actorsByMovie = response.data.results;
            dispatch({ type: EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS, payload: actorsByMovie });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_MOVIE_ACTORS_ERROR,
                payload: 'An error occurred while downloading actors for the movie',
            });
        }
    };
};
