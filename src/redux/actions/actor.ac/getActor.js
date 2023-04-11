import ActorsService from '../../../API/ActorsService';
import { EActionTypes } from '../../../types/EActionTypes';
export const getActor = (actorId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EActionTypes.FETCH_ACTOR });
            const response = await ActorsService.getActorById(actorId);
            const actor = response.data.results;
            dispatch({ type: EActionTypes.FETCH_ACTOR_SUCCESS, payload: actor });
        }
        catch (e) {
            dispatch({
                type: EActionTypes.FETCH_ACTOR_ERROR,
                payload: 'An error occurred while downloading actor',
            });
        }
    };
};
