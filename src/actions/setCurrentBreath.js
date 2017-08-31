import { SET_CURRENT_BREATH } from '../constants/settings.js';

export function setCurrentBreath(currentBreath) {
  return {
    type: SET_CURRENT_BREATH,
    data: {
      currentBreath
    }
  }
}