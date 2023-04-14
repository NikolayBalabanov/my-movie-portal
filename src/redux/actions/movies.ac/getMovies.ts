import { Dispatch } from 'redux';
import MoviesService from '../../../API/MoviesService';
import { IMovie } from '../../../models/movie';
import { EActionTypes } from '../../../types/EActionTypes';
import { TRootAction } from '../../../redux/rootReducer';

interface IFetchMovies {
  type: EActionTypes.FETCH_MOVIES;
}

interface IFetchMoviesSuccess {
  type: EActionTypes.FETCH_MOVIES_SUCCESS;
  payload: { totalPages: number; movies: IMovie[] };
}

interface IFetchMoviesError {
  type: EActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type TMovies = IFetchMovies | IFetchMoviesSuccess | IFetchMoviesError;

export const getMovies = (query: string, page = 1) => {
  return async (dispatch: Dispatch<TRootAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_MOVIES });
      const response = await MoviesService.getPopular(query, page);
      const movies: IMovie[] = response.data.results;
      const totalPages: number = response.data.total_pages;
      dispatch({
        type: EActionTypes.FETCH_MOVIES_SUCCESS,
        payload: { totalPages: totalPages < 501 ? totalPages : 500, movies },
      });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_MOVIES_ERROR,
        payload: 'An error occurred while downloading movies',
      });
    }
  };
};
