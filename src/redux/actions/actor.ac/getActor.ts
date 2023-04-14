import { AnyAction, Dispatch } from 'redux';
import { IActorDetails } from '../../../models/actor';
import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';

interface IFetchActor {
  type: EActionTypes.FETCH_ACTOR;
}

interface IFetchActorSuccess {
  type: EActionTypes.FETCH_ACTOR_SUCCESS;
  payload: IActorDetails;
}

interface IFetchActorError {
  type: EActionTypes.FETCH_ACTOR_ERROR;
  payload: string;
}

export type TActor = IFetchActor | IFetchActorSuccess | IFetchActorError;

export const getActor = (actorId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: EActionTypes.FETCH_ACTOR });
      const response = await ActorsService.getActorById(actorId);
      const actor: IActorDetails = response.data;
      dispatch({ type: EActionTypes.FETCH_ACTOR_SUCCESS, payload: actor });
    } catch (e) {
      dispatch({
        type: EActionTypes.FETCH_ACTOR_ERROR,
        payload: 'An error occurred while downloading actor',
      });
    }
  };
};
