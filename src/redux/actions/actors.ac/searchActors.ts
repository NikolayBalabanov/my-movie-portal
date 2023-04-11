import { AnyAction, Dispatch } from 'redux';
import { IActor } from '../../../models/actor';
import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';

interface ISearchActors {
  type: EActionTypes.SEARCH_ACTORS;
}

interface ISearchActorsSuccess {
  type: EActionTypes.SEARCH_ACTORS_SUCCESS;
  payload: IActor[];
}

interface ISearchActorsError {
  type: EActionTypes.SEARCH_ACTORS_ERROR;
  payload: string;
}

export type TSearchActors = ISearchActors | ISearchActorsSuccess | ISearchActorsError;

export const searchActors = (query: string, page = 1) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.SEARCH_ACTORS });
      const response = await ActorsService.searchActor(query, page);
      const actors: IActor[] = response.data.results;
      dispatch({ type: EActionTypes.SEARCH_ACTORS_SUCCESS, payload: actors });
    } catch (e) {
      dispatch({
        type: EActionTypes.SEARCH_ACTORS_ERROR,
        payload: 'An error occurred while downloading actors',
      });
    }
  };
};
