import { AnyAction, Dispatch } from 'redux';
import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchTrailer {
  type: EActionTypes.FETCH_TRAILER;
}

interface IFetchTrailerSuccess {
  type: EActionTypes.FETCH_TRAILER_SUCCESS;
  payload: string;
}

interface IFetchTrailerError {
  type: EActionTypes.FETCH_TRAILER_ERROR;
  payload: string;
}

export type TMovieTrailer = IFetchTrailer | IFetchTrailerSuccess | IFetchTrailerError;

export const getMovieTrailer = (movieId: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_TRAILER });
      const response = await MoviesService.getTrailerByMovieId(movieId);
      const trailerLink: string = response.data.results[0]?.key;
      dispatch({ type: EActionTypes.FETCH_TRAILER_SUCCESS, payload: trailerLink });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_TRAILER_ERROR,
        payload: 'An error occurred while downloading trailer link',
      });
    }
  };
};
