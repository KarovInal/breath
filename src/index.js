import configureStore from './store';
import {
  SelectBreath
} from './components';

let store = configureStore();
let selectBreath = new SelectBreath(store);
selectBreath.init();
selectBreath.addEvents();