import { Reducer } from 'redux';
import { IActorDetails } from '../../models/actor';
import { EActionTypes } from '../../types/EActionTypes';
import { TActor } from '../actions/actor.ac/getActor';

export interface IActorState {
  actor: IActorDetails | null;
  isLoading: boolean;
  error: string;
}

export const initialActorState: IActorState = {
  actor: null,
  error: '',
  isLoading: false,
};

export type TActorReducerAction = TActor;

export const actorReducer: Reducer<IActorState, TActorReducerAction> = (
  state = initialActorState,
  action
) => {
  switch (action.type) {
    case EActionTypes.FETCH_ACTOR:
      return {
        ...initialActorState,
        isLoading: true,
      };
    case EActionTypes.FETCH_ACTOR_SUCCESS:
      return {
        error: '',
        isLoading: false,
        actor: action.payload,
      };
    case EActionTypes.FETCH_ACTOR_ERROR:
      return { ...initialActorState, error: action.payload };
    default:
      return state;
  }
};

export default actorReducer;
