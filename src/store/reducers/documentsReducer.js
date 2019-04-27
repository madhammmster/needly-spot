import { handleActions, createAction } from 'redux-actions';
import { SET_DOCUMENTS } from '../constants';

const defaultState = {
    documents: null
};

export const setDocuments = createAction(SET_DOCUMENTS);


const documentsReducer = handleActions(
    {
        [setDocuments]: (state, action) => ({ ...state, documents: action.payload })
    },
    defaultState
);

export default documentsReducer;

