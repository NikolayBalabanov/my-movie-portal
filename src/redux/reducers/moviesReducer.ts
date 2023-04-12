import { Reducer } from 'redux';
import { IMovie } from '../../models/movie';
import { EActionTypes } from '../../types/EActionTypes';
import { TMovies } from '../actions/movies.ac/getMovies';
import { TSearchMovies } from '../actions/movies.ac/searchMovies';

export interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  totalPages: number;
  error: string;
}

export const initialMoviesState: IMoviesState = {
  movies: [],
  error: '',
  totalPages: 0,
  isLoading: false,
};

export type TMoviesReducerAction = TMovies | TSearchMovies;

export const moviesReducer: Reducer<IMoviesState, TMoviesReducerAction> = (
  state = initialMoviesState,
  action
) => {
  switch (action.type) {
    case EActionTypes.FETCH_MOVIES:
    case EActionTypes.SEARCH_MOVIES:
      return {
        movies: [],
        error: '',
        totalPages: 0,
        isLoading: true,
      };
    case EActionTypes.FETCH_MOVIES_SUCCESS:
    case EActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
      };
    case EActionTypes.FETCH_MOVIES_ERROR:
    case EActionTypes.SEARCH_MOVIES_ERROR:
      return { movies: [], totalPages: 0, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
