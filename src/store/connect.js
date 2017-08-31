export function getCurrentBreath(store) {
  return store.getState().currentBreath;
}

export function getCurrentControll(store) {
  return store.getState().controllBreath
}

export function getListOfSettings(store) {
  return store.getState().settings;
}