import { handleActions, createAction } from 'redux-actions';
import { SET_PLACES, SET_PLACE } from '../constants';

const defaultState = {
    places: [],
    place: null
};

export const setPlaces = createAction(SET_PLACES);
export const setPlace = createAction(SET_PLACE);


const placesReducer = handleActions(
    {
        [setPlaces]: (state, action) => ({ ...state, places: action.payload }),
        [setPlace]: (state, action) => ({ ...state, place: action.payload })
    },
    defaultState
);

export default placesReducer;

