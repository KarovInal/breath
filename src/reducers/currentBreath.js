import {
  EASY,
  MIDDLE,
  PRO,
  SET_CURRENT_BREATH
} from '../constants/settings.js';

export default function currentBreath(state = EASY, action) {
  switch(action.type) {
    case SET_CURRENT_BREATH:
      return action.data.currentBreath
    default:
      return state
  }
}