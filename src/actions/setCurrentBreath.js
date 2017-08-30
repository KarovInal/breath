export const SET_CURRENT_BREATH = 'SET_CURRENT_BREATH';

export function setCurrentBreath(currentBreath) {
  return {
    type: SET_CURRENT_BREATH,
    data: {
      currentBreath
    }
  }
}