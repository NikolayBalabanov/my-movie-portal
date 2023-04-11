import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';
export const searchActors = (query, page = 1) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.SEARCH_ACTORS });
            const response = await ActorsService.searchActor(query, page);
            const actors = response.data.results;
            dispatch({ type: EActionTypes.SEARCH_ACTORS_SUCCESS, payload: actors });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.SEARCH_ACTORS_ERROR,
                payload: 'An error occurred while downloading actors',
            });
        }
    };
};
