import {
  PLAY,
  PAUSE,
  RESTART,
  SET_STATUS_BREATH
} from '../constants/status.js';

export default function statusBreath(state = PLAY, action) {
  switch(action.type) {
    case SET_STATUS_BREATH:
      return action.data.status;
    default:
      return state
  }
}