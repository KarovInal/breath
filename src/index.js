import configureStore from './store';
import {
  Breath,
  SelectBreath,
  ControllBreath
} from './container';

let store = configureStore();
let selectBreath = new SelectBreath(store);
selectBreath.init();
selectBreath.addEvents();

let controllBreath = new ControllBreath(store);
controllBreath.init();
controllBreath.addEvents();

let breath = new Breath(store);
breath.init();

store.subscribe(() => {
  console.log("Console - " + store.getState());
})