import { handleActions, createAction } from 'redux-actions';
import { SET_TYPE } from '../constants';

const defaultState = {
    type: undefined
};

export const setType = createAction(SET_TYPE);



const addPlaceReducer = handleActions(
    {
        [setType]: (state, action) => ({
            ...state,
            type: action.payload
        }
        ),
    },
    defaultState
);

export default addPlaceReducer;

