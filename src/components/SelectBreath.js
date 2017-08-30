import { $$ } from '../utils';
import { setCurrentBreath } from '../actions';
import { currentBreathStore } from '../store/connect.js';

export default class SelectBreath {
  constructor(store) {
    this.store = store;
    this.currentBreath = currentBreathStore(this.store);

    this.$selectBreath = $$('.select-breath');
  }

  onClickSelector({ target }) {
    this.store.dispatch(setCurrentBreath(target.value));
  }

  writeCurrentBreath() {
    console.log(currentBreathStore(this.store));
  }

  addEvents() {
    this.$selectBreath.forEach(selector => {
      selector.addEventListener('change', this.onClickSelector.bind(this));
    });
  }

  init() {
    this.store.subscribe(this.writeCurrentBreath.bind(this));
    this.$selectBreath[0].value = this.currentBreath;
  }
}