import { EActionTypes } from '../../types/EActionTypes';
export const initialActorState = {
    actor: null,
    error: '',
    isLoading: false,
};
export const actorReducer = (state = initialActorState, action) => {
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
