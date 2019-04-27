import { handleActions, createAction } from 'redux-actions';
import { SET_FILTERS } from '../constants';

const defaultState = {

};

export const setFilters = createAction(SET_FILTERS);


const faderReducer = handleActions(
    {
        [setFilters]: (state, filters) => ({ ...filters })
    },
    defaultState
);

export default faderReducer;

