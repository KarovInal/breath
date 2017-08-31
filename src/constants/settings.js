export const EASY = 'EASY';
export const MIDDLE = 'MIDDLE';
export const PRO = 'PRO';

export const SET_CURRENT_BREATH = 'SET_CURRENT_BREATH';

const SETTINGS = {
  EASY: [
    { value: 0, duration: 0, delay: 0 },
    { value: 1, duration: 3000, delay: 0 },
    { value: 0, duration: 3000, delay: 0 },
  ],
  MIDDLE: [
    { value: 0, duration: 0, delay: 0 },
    { value: 1, duration: 5000, delay: 0 },
    { value: 1, duration: 3000, delay: 0 },
    { value: 0, duration: 5000, delay: 0 }
  ],
  PRO: [
    { value: 0, duration: 0, delay: 0 },
    { value: 1, duration: 5000, delay: 0 },
    { value: 1, duration: 3000, delay: 0 },
    { value: 0, duration: 5000, delay: 0 },
    { value: 0, duration: 3000, delay: 0 },
  ]
}

export default SETTINGS;