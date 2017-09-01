export const EASY = 'EASY';
export const MIDDLE = 'MIDDLE';
export const PRO = 'PRO';

export const SET_CURRENT_BREATH = 'SET_CURRENT_BREATH';

const SETTINGS = {
  EASY: {
    colors: '#000',
    'setting': [
      { value: .3, duration: 0, delay: 0, easing: 'linear' },
      { value: 1, duration: 3000, delay: 0, easing: 'linear' },
      { value: .3, duration: 3000, delay: 0, easing: 'linear' }
    ]
  },
  MIDDLE: {
    colors: [
      { value: '#000' },
      { value: '#000', duration: 5000, easing: 'linear' },
      { value: 'rgb(0,0,250)', duration: 3000, easing: 'linear' },
      { value: '#000', duration: 5000, easing: 'linear' }
    ],
    'setting': [
      { value: .3, duration: 0, delay: 0, easing: 'linear' },
      { value: 1, duration: 5000, delay: 0, easing: 'linear' },
      { value: 1, duration: 3000, delay: 0, easing: 'linear' },
      { value: .3, duration: 5000, delay: 0, easing: 'linear' }
    ]
  },
  PRO: {
    colors: [
      { value: '#000', easing: 'linear' },
      { value: '#000', duration: 5000, easing: 'linear' },
      { value: 'rgb(0,0,250)', duration: 3000, easing: 'linear' },
      { value: '#000', duration: 5000, easing: 'linear' },
      { value: 'rgb(0,250,0)', duration: 3000, easing: 'linear' }
    ],
    'setting': [
      { value: .3, duration: 0, delay: 0, easing: 'linear' },
      { value: 1, duration: 5000, delay: 0, easing: 'linear' },
      { value: 1, duration: 3000, delay: 0, easing: 'linear' },
      { value: .3, duration: 5000, delay: 0, easing: 'linear' },
      { value: .3, duration: 3000, delay: 0, easing: 'linear' },
    ]
  }
}

export default SETTINGS;