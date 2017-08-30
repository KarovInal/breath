export const EASY = 'EASY';
export const MIDDLE = 'MIDDLE';
export const PRO = 'PRO';

const SETTINGS = {
  EASY: [
    { value: 0, duration: 0, delay: 0, easing: 'easeOut' },
    { value: 1, duration: 3000, delay: 0, easing: 'easeOut' },
    { value: 0, duration: 3000, delay: 0, easing: 'easeOut' },
  ],
  MIDDLE: [
    { value: 0, duration: 0, delay: 0, easing: 'easeOut' },
    { value: 1, duration: 5000, delay: 0, easing: 'easeOut' },
    { value: 1, duration: 3000, delay: 0, easing: 'easeOut' },
    { value: 0, duration: 5000, delay: 0, easing: 'easeOut' }
  ],
  PRO: [
    { value: 0, duration: 0, delay: 0, easing: 'easeOut' },
    { value: 1, duration: 5000, delay: 0, easing: 'easeOut' },
    { value: 1, duration: 3000, delay: 0, easing: 'easeOut' },
    { value: 0, duration: 5000, delay: 0, easing: 'easeOut' },
    { value: 0, duration: 3000, delay: 0, easing: 'easeOut' },
  ]
}

export default SETTINGS;