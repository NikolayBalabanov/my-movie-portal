import { EActionTypes } from '../../types/EActionTypes';
export const initialMovieState = {
    movie: null,
    movieActors: [],
    trailerLink: '',
    isLoading: false,
    movieActorsError: '',
    trailerLinkError: '',
    movieError: '',
};
export const movieReducer = (state = initialMovieState, action) => {
    switch (action.type) {
        case EActionTypes.FETCH_MOVIE:
            return {
                ...initialMovieState,
                isLoading: true,
            };
        case EActionTypes.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                movie: action.payload,
            };
        case EActionTypes.FETCH_MOVIE_ERROR:
            return { ...initialMovieState, movieError: action.payload };
        case EActionTypes.FETCH_MOVIE_ACTORS:
        case EActionTypes.FETCH_TRAILER:
            return state;
        case EActionTypes.FETCH_MOVIE_ACTORS_SUCCESS:
            return { ...state, movieActors: action.payload };
        case EActionTypes.FETCH_TRAILER_SUCCESS:
            return { ...state, trailerLink: action.payload };
        case EActionTypes.FETCH_MOVIE_ACTORS_ERROR:
            return { ...state, movieActorsError: action.payload };
        case EActionTypes.FETCH_TRAILER_ERROR:
            return { ...state, trailerLinkError: action.payload };
        default:
            return state;
    }
};
export default movieReducer;
