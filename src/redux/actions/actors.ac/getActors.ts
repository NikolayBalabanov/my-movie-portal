import { AnyAction, Dispatch } from 'redux';
import { IActor } from '../../../models/actor';
import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchActors {
  type: EActionTypes.FETCH_ACTORS;
}

interface IFetchActorsSuccess {
  type: EActionTypes.FETCH_ACTORS_SUCCESS;
  payload: IActor[];
}

interface IFetchActorsError {
  type: EActionTypes.FETCH_ACTORS_ERROR;
  payload: string;
}

export type TActors = IFetchActors | IFetchActorsSuccess | IFetchActorsError;

export const getActors = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_ACTORS });
      const response = await ActorsService.getPopular();
      const actors: IActor[] = response.data.results;
      dispatch({ type: EActionTypes.FETCH_ACTORS_SUCCESS, payload: actors });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_ACTORS_ERROR,
        payload: 'An error occurred while downloading actors',
      });
    }
  };
};
