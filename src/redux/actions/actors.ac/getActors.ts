import { AnyAction, Dispatch } from 'redux';
import { IActor } from '../../../models/actor';
import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchActors {
  type: EActionTypes.FETCH_ACTORS;
}

interface IFetchActorsSuccess {
  type: EActionTypes.FETCH_ACTORS_SUCCESS;
  payload: { totalPages: number; actors: IActor[] };
}

interface IFetchActorsError {
  type: EActionTypes.FETCH_ACTORS_ERROR;
  payload: string;
}

export type TActors = IFetchActors | IFetchActorsSuccess | IFetchActorsError;

export const getActors = (page: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_ACTORS });
      const response = await ActorsService.getPopular(page);
      const actors: IActor[] = response.data.results;
      const totalPages: number = response.data.total_pages;
      dispatch({
        type: EActionTypes.FETCH_ACTORS_SUCCESS,
        payload: { actors, totalPages: totalPages < 501 ? totalPages : 500 },
      });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_ACTORS_ERROR,
        payload: 'An error occurred while downloading actors',
      });
    }
  };
};
