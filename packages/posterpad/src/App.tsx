// tslint:disable-next-line:no-submodule-imports
import '@/assets/scss/style.scss';
import React from 'react';
import { Router, Navi } from '@posterpad/router';
import { Home, Login } from '@/pages';

function beforeEach(props, route, req, ctx) {
  if (props.public) {
    return route;
  }
  if (!localStorage.authToken) {
    return Navi.redirect('/login');
  }
  return route;
}

export function App() {
  return (
    <Router before={beforeEach}>
      <Home path="/" />
      <Login path="/login" public />
    </Router>
  );
}
