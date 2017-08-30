import { combineReducers } from 'redux';
import settings from './settings.js';
import currentBreath from './currentBreath.js';
import statusBreath from './statusBreath.js';

let reducer = combineReducers({
  settings,
  currentBreath,
  statusBreath
});

export default reducer;