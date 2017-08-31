import { $$ } from '../utils';
import { setCurrentBreath, setStatusBreath } from '../actions';
import { getCurrentBreath } from '../store/connect.js';
import { PAUSE, RESTART } from '../constants/status.js';

export default class SelectBreath {
  constructor(store) {
    this.store = store;
    this.currentBreath = getCurrentBreath(this.store);

    this.$selectBreath = $$('.select-breath')[0];
  }

  onClickSelector({ target }) {
    //установить новую настройку для дыхания
    this.store.dispatch(setCurrentBreath(target.value));

    this.store.dispatch(setStatusBreath(PAUSE));
  }

  onChangeOption() {
    let newCurrentBreath = getCurrentBreath(this.store);
    
    if(newCurrentBreath !== this.currentBreath) {
      this.currentBreath = newCurrentBreath;
      this.$selectBreath.value = newCurrentBreath;
    }
  }

  addEvents() {
    this.$selectBreath.addEventListener('change', this.onClickSelector.bind(this));
  }

  init() {
    this.store.subscribe(this.onChangeOption.bind(this));
    this.$selectBreath.value = this.currentBreath;
  }
}