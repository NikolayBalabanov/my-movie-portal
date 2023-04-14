import { EActionTypes } from '../types/EActionTypes';
import movieReducer, {
  IMovieState,
  TMovieReducerAction,
  initialMovieState,
} from './reducers/movieReducer';
import moviesReducer, {
  IMoviesState,
  TMoviesReducerAction,
  initialMoviesState,
} from './reducers/moviesReducer';
import { Reducer } from 'redux';
import actorsReducer, {
  IActorsState,
  TActorsReducerAction,
  initialActorsState,
} from './reducers/actorsReducer';
import actorReducer, {
  IActorState,
  TActorReducerAction,
  initialActorState,
} from './reducers/actorReducer';

export interface IRootState {
  movie: IMovieState;
  movies: IMoviesState;
  actor: IActorState;
  actors: IActorsState;
}
export type TRootAction =
  | TMovieReducerAction
  | TMoviesReducerAction
  | TActorReducerAction
  | TActorsReducerAction;

export const rootReducer: Reducer<IRootState, TRootAction> = (
  state = {
    movie: {
      ...initialMovieState,
    },
    movies: {
      ...initialMoviesState,
    },
    actor: {
      ...initialActorState,
    },
    actors: {
      ...initialActorsState,
    },
  },
  action
) => {
  switch (action.type) {
    case EActionTypes.FETCH_MOVIES:
    case EActionTypes.FETCH_MOVIES_SUCCESS:
    case EActionTypes.FETCH_MOVIES_ERROR:
    case EActionTypes.SEARCH_MOVIES:
    case EActionTypes.SEARCH_MOVIES_SUCCESS:
    case EActionTypes.SEARCH_MOVIES_ERROR:
      return {
        ...state,
        movies: moviesReducer(state.movies, action),
      };
    case EActionTypes.FETCH_ACTORS:
    case EActionTypes.FETCH_ACTORS_SUCCESS:
    case EActionTypes.FETCH_ACTORS_ERROR:
    case EActionTypes.SEARCH_ACTORS:
    case EActionTypes.SEARCH_ACTORS_SUCCESS:
    case EActionTypes.SEARCH_ACTORS_ERROR:
      return {
        ...state,
        actors: actorsReducer(state.actors, action),
      };
    case EActionTypes.FETCH_ACTOR:
    case EActionTypes.FETCH_ACTOR_SUCCESS:
    case EActionTypes.FETCH_ACTOR_ERROR:
    case EActionTypes.FETCH_ACTOR_MOVIES:
    case EActionTypes.FETCH_ACTOR_MOVIES_SUCCESS:
    case EActionTypes.FETCH_ACTOR_MOVIES_ERROR:
      return {
        ...state,
        actor: actorReducer(state.actor, action),
      };
    case EActionTypes.FETCH_MOVIE:
    case EActionTypes.FETCH_MOVIE_SUCCESS:
    case EActionTypes.FETCH_MOVIE_ERROR:
    case EActionTypes.FETCH_MOVIE_ACTORS:
    case EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS:
    case EActionTypes.FETCH_MOVIE_ACTORS_ERROR:
    case EActionTypes.FETCH_TRAILER:
    case EActionTypes.FETCH_TRAILER_SUCCESS:
    case EActionTypes.FETCH_TRAILER_ERROR:
      return {
        ...state,
        movie: movieReducer(state.movie, action),
      };
    default:
      return state;
  }
};
