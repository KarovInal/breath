import { $$ } from '../utils';
import { PLAY, PAUSE, RESTART } from '../constants/status.js';
import playIcon from '../img/play.png';
import pauseIcon from '../img/pause.png';

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
        this.$controllBreath.innerHTML = `Пауза <img class="status-icon" src=${pauseIcon} >`;
        return;
      case PAUSE:
        this.controllEmpty();
        this.$controllBreath.innerHTML = `Начать <img class="status-icon" src=${playIcon} >`;
        return;        
      case RESTART:
        this.controllEmpty();
        this.$controllBreath.innerHTML = `Начать <img class="status-icon" src=${playIcon} >`;
        return;
      default:
        this.controllEmpty();
        this.$controllBreath.innerHTML = `Начать <img class="status-icon" src=${playIcon} >`;
    }
  }

  controllEmpty() {
    this.$controllBreath.innerHTML = '';
  }

  init(status) {
    this.updateControll(status);
  }
}