import { $$ } from '../utils';
import { getCurrentControll } from '../store/connect.js';
import { $pausePlay } from '../components';
import { setStatusBreath } from '../actions';
import { PLAY, PAUSE, RESTART } from './../constants/status.js';

export default class ControllBreath {
  constructor(store) {
    this.store = store;
    this.currentControll = getCurrentControll(store);

    this.$pausePlay = new $pausePlay();
    this.$pausePlay.init(this.currentControll);

    this.$controllRestart = $$('.breath-restart')[0];
  }

  onClickPausePlay({ target }) {
    let currentControll = getCurrentControll(this.store);

    switch(currentControll) {
      case PLAY:
        this.store.dispatch(setStatusBreath(PAUSE))
        return;
      case PAUSE:
        this.store.dispatch(setStatusBreath(PLAY))
        return;
    }
  }

  onClickRestart({ target }) {
    console.log(target);
  }

  pausePlayUpdate() {
    let currentControll = getCurrentControll(this.store);

    this.$pausePlay.updateControll(currentControll);
  }

  addEvents() {
    this.$pausePlay.getComponent().addEventListener('click', this.onClickPausePlay.bind(this));
    this.$controllRestart.addEventListener('click', this.onClickRestart.bind(this));
  }

  init() {
    this.store.subscribe(this.pausePlayUpdate.bind(this));
  }
}