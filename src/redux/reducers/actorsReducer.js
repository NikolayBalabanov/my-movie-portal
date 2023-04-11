import { EActionTypes } from '../../types/EActionTypes';
export const initialActorsState = {
    actors: [],
    isLoading: false,
    error: '',
};
export const actorsReducer = (state = initialActorsState, action) => {
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
