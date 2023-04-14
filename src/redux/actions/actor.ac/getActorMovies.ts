import { AnyAction, Dispatch } from 'redux';
import { IMovie } from '../../../models/movie';
import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchActorMovies {
  type: EActionTypes.FETCH_ACTOR_MOVIES;
}

interface IFetchActorMoviesSuccess {
  type: EActionTypes.FETCH_ACTOR_MOVIES_SUCCESS;
  payload: IMovie[];
}

interface IFetchActorMoviesError {
  type: EActionTypes.FETCH_ACTOR_MOVIES_ERROR;
  payload: string;
}

export type TActorMovies = IFetchActorMovies | IFetchActorMoviesSuccess | IFetchActorMoviesError;

export const getActorMovies = (movieId: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_ACTOR_MOVIES });
      const response = await ActorsService.getMoviesByActorId(movieId);
      const actorsByMovie: IMovie[] = response.data.cast;
      dispatch({ type: EActionTypes.FETCH_ACTOR_MOVIES_SUCCESS, payload: actorsByMovie });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_ACTOR_MOVIES_ERROR,
        payload: 'An error occurred while downloading actors for the movie',
      });
    }
  };
};
