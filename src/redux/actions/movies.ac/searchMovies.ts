import { AnyAction, Dispatch } from 'redux';
import { IMovie } from '../../../models/movie';
import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';

interface ISearchMovies {
  type: EActionTypes.SEARCH_MOVIES;
}

interface ISearchMoviesSuccess {
  type: EActionTypes.SEARCH_MOVIES_SUCCESS;
  payload: { totalPages: number; movies: IMovie[] };
}

interface ISearchMoviesError {
  type: EActionTypes.SEARCH_MOVIES_ERROR;
  payload: string;
}

export type TSearchMovies = ISearchMovies | ISearchMoviesSuccess | ISearchMoviesError;

export const searchMovies = (search: string, page: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.SEARCH_MOVIES });
      const response = await MoviesService.searchMovie(search, page);
      const movies: IMovie[] = response.data.results;
      const totalPages: number = response.data.total_pages;
      dispatch({
        type: EActionTypes.FETCH_MOVIES_SUCCESS,
        payload: { totalPages: totalPages < 501 ? totalPages : 500, movies },
      });
    } catch (e) {
      dispatch({
        type: EActionTypes.SEARCH_MOVIES_ERROR,
        payload: 'An error occurred while downloading movies (search)',
      });
    }
  };
};
