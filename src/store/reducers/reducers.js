import { combineReducers } from 'redux';

import app from './appReducer';
import fader from './faderReducer';
import user from './userReducer';
import documents from './documentsReducer';
import addPlace from './addPlaceReducer';
import filters from './filtersReducer';
import places from './placesReducer';

const reducers = {
  app,
  fader,
  user,
  documents,
  addPlace,
  filters,
  places
};

export default combineReducers(reducers);