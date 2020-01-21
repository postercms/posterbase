import {
  useEffect,
  useState
} from 'react';

export class Store {
  constructor(initialState, actions) {
    this.state = {
      ...initialState
    };
    this.setters = [];
    this.actions = {};
    this.attachActions(actions);
  }

  attachActions(actions) {
    Object.entries(actions).forEach(([name, fn]) => {
      if (typeof fn !== 'function') {
        throw new Error(`Action '${name}' must be a function.`);
      }
      this.actions[name] = fn.bind(this);
    });
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    };
    this.setters.forEach(setState => setState(newState));
  }

  useStore() {
    const [state, setState] = useState(this.state);
    useEffect(() => {
      this.setters.push(setState);
      return () => {
        this.setters = this.setters.filter(setter => setter !== setState);
      }
    });
    return [state, this.actions];
  }
}

export function createStore(initialState = {}, actions) {
  const store = new Store(initialState, actions);
  return store.useStore.bind(store);
}
