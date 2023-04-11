import { Reducer } from 'redux';
import { IActor } from '../../models/actor';
import { EActionTypes } from '../../types/EActionTypes';
import { TActors } from '../actions/actors.ac/getActors';
import { TSearchActors } from '../actions/actors.ac/searchActors';

export interface IActorsState {
  actors: IActor[];
  isLoading: boolean;
  error: string;
}

export const initialActorsState: IActorsState = {
  actors: [],
  isLoading: false,
  error: '',
};

export type TActorsReducerAction = TActors | TSearchActors;

export const actorsReducer: Reducer<IActorsState, TActorsReducerAction> = (
  state = initialActorsState,
  action
) => {
  switch (action.type) {
    case EActionTypes.FETCH_ACTORS:
    case EActionTypes.SEARCH_ACTORS:
      return {
        actors: [],
        error: '',
        isLoading: true,
      };
    case EActionTypes.FETCH_ACTORS_SUCCESS:
    case EActionTypes.SEARCH_ACTORS_SUCCESS:
      return {
        error: '',
        isLoading: false,
        actors: action.payload,
      };
    case EActionTypes.FETCH_ACTORS_ERROR:
    case EActionTypes.SEARCH_ACTORS_ERROR:
      return { actors: [], isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default actorsReducer;
