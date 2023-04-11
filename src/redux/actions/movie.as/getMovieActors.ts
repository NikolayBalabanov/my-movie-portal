import { AnyAction, Dispatch } from 'redux';
import { IMovieActor } from '../../../models/actor';
import MoviesService from '../../../API/MoviesService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchMovieActors {
  type: EActionTypes.FETCH_MOVIE_ACTORS;
}

interface IFetchMovieActorsSuccess {
  type: EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS;
  payload: IMovieActor[];
}

interface IFetchMovieActorsError {
  type: EActionTypes.FETCH_MOVIE_ACTORS_ERROR;
  payload: string;
}

export type TMovieActors = IFetchMovieActors | IFetchMovieActorsSuccess | IFetchMovieActorsError;

export const getMovieActors = (movieId: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_MOVIE_ACTORS });
      const response = await MoviesService.getActorsByMovieId(movieId);
      const actorsByMovie: IMovieActor[] = response.data.results;
      dispatch({ type: EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS, payload: actorsByMovie });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_MOVIE_ACTORS_ERROR,
        payload: 'An error occurred while downloading actors for the movie',
      });
    }
  };
};
