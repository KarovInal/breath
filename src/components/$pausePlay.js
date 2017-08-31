import { $$ } from '../utils';
import { PLAY, PAUSE, RESTART } from '../constants/status.js';

export default class $pausePlay {
  constructor() {
    this.$controllBreath = $$('.breath-pause-play')[0];
  }

  getComponent() {
    return this.$controllBreath;
  }

  updateControll(status) {
    switch(status) {
      case PLAY:
        this.controllEmpty();
        this.$controllBreath.innerHTML = PAUSE;
        return;
      case PAUSE:
        this.controllEmpty();
        this.$controllBreath.innerHTML = PLAY;
        return;        
      case RESTART:
        this.controllEmpty();
        this.$controllBreath.innerHTML = PLAY;
        return;
      default:
        this.controllEmpty();
        this.$controllBreath.innerHTML = 'NONE';
    }
  }

  controllEmpty() {
    this.$controllBreath.innerHTML = '';
  }

  init(status) {
    this.updateControll(status);
  }
}