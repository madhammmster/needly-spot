import { handleActions, createAction } from 'redux-actions';
import { SET_PLACES, SET_PLACE, SET_MY_PLACES } from '../constants';

const defaultState = {
    places: [],
    myPlaces: null,
    place: null
};

export const setPlaces = createAction(SET_PLACES);
export const setMyPlaces = createAction(SET_MY_PLACES);
export const setPlace = createAction(SET_PLACE);


const placesReducer = handleActions(
    {
        [setPlaces]: (state, action) => ({ ...state, places: action.payload }),
        [setMyPlaces]: (state, action) => ({ ...state, myPlaces: action.payload }),
        [setPlace]: (state, action) => ({ ...state, place: action.payload })
    },
    defaultState
);

export default placesReducer;

