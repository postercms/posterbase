import { useEffect, useState } from 'react';

export class Store {
  private state: {};
  private setters: any[];
  private actions: {};

  constructor(initialState: {}, actions: {}) {
    this.state = {
      ...initialState,
    };
    this.setters = [];
    this.actions = {};
    this.attachActions(actions);
  }

  public attachActions(actions: {}) {
    Object.entries(actions).forEach(([name, fn]) => {
      if (typeof fn !== 'function') {
        throw new Error(`Action '${name}' must be a function.`);
      }
      this.actions[name] = fn.bind(this);
    });
  }

  public setState(newState: {}) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.setters.forEach(setState => setState(newState));
  }

  public useStore() {
    const [state, setState] = useState(this.state);
    useEffect(() => {
      this.setters.push(setState);
      return () => {
        this.setters = this.setters.filter(setter => setter !== setState);
      };
    });
    return [state, this.actions];
  }
}
