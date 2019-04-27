import { handleActions, createAction } from 'redux-actions';
import { SET_PLACES } from '../constants';

const defaultState = {
    places: []
};

export const setPlaces = createAction(SET_PLACES);


const placesReducer = handleActions(
    {
        [setPlaces]: (state, action) => ({ ...state, places: action.payload })
    },
    defaultState
);

export default placesReducer;

