import {
  PLAY,
  PAUSE,
  RESTART,
  SET_STATUS_BREATH
} from '../constants/status.js';

export default function controllBreath(state = PAUSE, action) {
  switch(action.type) {
    case SET_STATUS_BREATH:
      return action.data.status;
    default:
      return state
  }
}