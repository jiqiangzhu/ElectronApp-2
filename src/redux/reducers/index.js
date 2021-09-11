import playReducer from './play-reducer';
import mapReducer from './map-reducer';
import { combineReducers } from 'redux';

const allReducers = {
  playReducer: playReducer,
  mapReducer: mapReducer,
};

let rootReducer = combineReducers(allReducers);

export default rootReducer;
