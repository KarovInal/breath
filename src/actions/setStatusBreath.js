import { SET_STATUS_BREATH } from '../constants/status.js';

export function setStatusBreath(status) {
  return {
    type: SET_STATUS_BREATH,
    data: {
      status
    }
  }
}