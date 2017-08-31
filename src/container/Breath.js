import { $$ } from '../utils';
import { $breath } from '../components';
import { getCurrentBreath, getCurrentControll, getListOfSettings } from '../store/connect.js';

export default class Breath {
  constructor(store) {
    this.store = store;
    this.currentSetting = getCurrentBreath(this.store);
    this.currentControll = getCurrentControll(this.store);

    this.breathElement = new $breath(getListOfSettings(this.store));
  }

  breathUpdate() {
    let newSetting = getCurrentBreath(this.store);
    let newControll = getCurrentControll(this.store);

    if(this.currentSetting != newSetting) {
      this.currentSetting = newSetting;
      this.breathElement.setNewBreath(this.currentSetting);
      return;
    }
    
    if(newControll) {
      this.currentControll = newControll;
      this.breathElement[this.currentControll]();
      return;
    }
  }

  init() {
    this.store.subscribe(this.breathUpdate.bind(this));
    this.breathElement.init(this.currentSetting);
  }
}