import { combineReducers } from 'redux';
import settings from './settings.js';
import currentBreath from './currentBreath.js';
import controllBreath from './controllBreath.js';

let reducer = combineReducers({
  settings,
  currentBreath,
  controllBreath
});

export default reducer;