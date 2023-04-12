import { Reducer } from 'redux';
import { IMovie } from '../../models/movie';
import { IActorDetails } from '../../models/actor';
import { TActor } from '../actions/actor.ac/getActor';
import { EActionTypes } from '../../types/EActionTypes';
import { TActorMovies } from '../../redux/actions/actor.ac/getActorMovies';

export interface IActorState {
  actor: IActorDetails | null;
  actorMovies: IMovie[];
  isLoading: boolean;
  error: string;
}

export const initialActorState: IActorState = {
  actor: null,
  actorMovies: [],
  isLoading: false,
  error: '',
};

export type TActorReducerAction = TActor | TActorMovies;

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
        actorMovies: [],
        error: '',
        isLoading: false,
        actor: action.payload,
      };
    case EActionTypes.FETCH_ACTOR_ERROR:
      return { ...initialActorState, error: action.payload };
    case EActionTypes.FETCH_ACTOR_MOVIES:
      return {
        ...state,
        actorMovies: [],
      };
    case EActionTypes.FETCH_ACTOR_MOVIES_SUCCESS:
      return {
        ...state,
        actorMovies: action.payload,
      };
    case EActionTypes.FETCH_ACTOR_MOVIES_ERROR:
      return state;
    default:
      return state;
  }
};

export default actorReducer;
