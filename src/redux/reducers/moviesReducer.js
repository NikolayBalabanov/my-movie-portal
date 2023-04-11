import { EActionTypes } from '../../types/EActionTypes';
export const initialMoviesState = {
    movies: [],
    error: '',
    isLoading: false,
};
export const moviesReducer = (state = initialMoviesState, action) => {
    switch (action.type) {
        case EActionTypes.FETCH_MOVIES:
        case EActionTypes.SEARCH_MOVIES:
            return {
                movies: [],
                error: '',
                isLoading: true,
            };
        case EActionTypes.FETCH_MOVIES_SUCCESS:
        case EActionTypes.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                movies: action.payload,
            };
        case EActionTypes.FETCH_MOVIES_ERROR:
        case EActionTypes.SEARCH_MOVIES_ERROR:
            return { movies: [], isLoading: false, error: action.payload };
        default:
            return state;
    }
};
export default moviesReducer;
