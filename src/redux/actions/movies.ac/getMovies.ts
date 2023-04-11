import { Dispatch } from 'redux';
import MoviesService from '../../../API/MoviesService';
import { IMovie } from '../../../models/movie';
import { EActionTypes } from '../../../types/EActionTypes';
import { EMoviesFilter } from '../../../types/EMoviesFilter';
import { TRootAction } from '../../../redux/rootReducer';

interface IFetchMovies {
  type: EActionTypes.FETCH_MOVIES;
}

interface IFetchMoviesSuccess {
  type: EActionTypes.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
}

interface IFetchMoviesError {
  type: EActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type TMovies = IFetchMovies | IFetchMoviesSuccess | IFetchMoviesError;

export const getMovies = (query = EMoviesFilter.popular) => {
  return async (dispatch: Dispatch<TRootAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_MOVIES });
      const response = await MoviesService.getPopular(query);
      const movies: IMovie[] = response.data.results;
      dispatch({ type: EActionTypes.FETCH_MOVIES_SUCCESS, payload: movies });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_MOVIES_ERROR,
        payload: 'An error occurred while downloading movies',
      });
    }
  };
};
