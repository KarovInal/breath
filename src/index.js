import configureStore from './store';
import {
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

store.subscribe(() => {
  console.log(store.getState());
})