import { Reducer } from 'redux';
import { IMovieActor } from '../../models/actor';
import { IDetailedMovie } from '../../models/movie';
import { EActionTypes } from '../../types/EActionTypes';
import { TMovie } from '../actions/movie.as/getMovieById';
import { TMovieActors } from '../actions/movie.as/getMovieActors';
import { TMovieTrailer } from '../actions/movie.as/getMovieTrailer';

export interface IMovieState {
  movie: IDetailedMovie | null;
  movieActors: IMovieActor[];
  trailerLink: string;
  isLoading: boolean;
  movieActorsError: string;
  trailerLinkError: string;
  movieError: string;
}

export const initialMovieState: IMovieState = {
  movie: null,
  movieActors: [],
  trailerLink: '',
  isLoading: false,
  movieActorsError: '',
  trailerLinkError: '',
  movieError: '',
};

export type TMovieReducerAction = TMovie | TMovieActors | TMovieTrailer;

export const movieReducer: Reducer<IMovieState, TMovieReducerAction> = (
  state = initialMovieState,
  action
) => {
  switch (action.type) {
    case EActionTypes.FETCH_MOVIE:
      return {
        ...initialMovieState,
        isLoading: true,
      };
    case EActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        movie: action.payload,
      };
    case EActionTypes.FETCH_MOVIE_ERROR:
      return { ...initialMovieState, movieError: action.payload };
    case EActionTypes.FETCH_MOVIE_ACTORS:
    case EActionTypes.FETCH_TRAILER:
      return state;
    case EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS:
      return { ...state, movieActors: action.payload };
    case EActionTypes.FETCH_TRAILER_SUCCESS:
      return { ...state, trailerLink: action.payload };
    case EActionTypes.FETCH_MOVIE_ACTORS_ERROR:
      return { ...state, movieActorsError: action.payload };
    case EActionTypes.FETCH_TRAILER_ERROR:
      return { ...state, trailerLinkError: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
