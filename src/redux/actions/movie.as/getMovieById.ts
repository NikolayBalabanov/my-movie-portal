import { AnyAction, Dispatch } from 'redux';
import MoviesService from '../../../API/MoviesService';
import { IDetailedMovie } from '../../../models/movie';
import { EActionTypes } from '../../../types/EActionTypes';
import { TRootAction } from '../../../redux/rootReducer';

interface IFetchMovie {
  type: EActionTypes.FETCH_MOVIE;
}

interface IFetchMovieSuccess {
  type: EActionTypes.FETCH_MOVIE_SUCCESS;
  payload: IDetailedMovie;
}

interface IFetchMovieError {
  type: EActionTypes.FETCH_MOVIE_ERROR;
  payload: string;
}

export type TMovie = IFetchMovie | IFetchMovieSuccess | IFetchMovieError;

export const getMovieById = (movieId: string) => {
  return async (dispatch: Dispatch<TRootAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_MOVIE });
      const response = await MoviesService.getMovieById(movieId);
      const movie: IDetailedMovie = response.data;
      dispatch({ type: EActionTypes.FETCH_MOVIE_SUCCESS, payload: movie });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_MOVIE_ERROR,
        payload: 'An error occurred while downloading movie',
      });
    }
  };
};
