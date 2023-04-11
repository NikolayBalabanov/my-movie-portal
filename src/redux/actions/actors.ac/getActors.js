import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';
export const getActors = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_ACTORS });
            const response = await ActorsService.getPopular();
            const actors = response.data.results;
            dispatch({ type: EActionTypes.FETCH_ACTORS_SUCCESS, payload: actors });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_ACTORS_ERROR,
                payload: 'An error occurred while downloading actors',
            });
        }
    };
};
