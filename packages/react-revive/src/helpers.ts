import { Store } from './Store';

export function createStore(initialState = {}, actions: {}) {
  const store = new Store(initialState, actions);
  return store.useStore.bind(store);
}
