// tslint:disable-next-line:no-submodule-imports
import '@/assets/scss/style.scss';
import * as React from 'react';
import { Router } from '@posterpad/router';
import api from './api';

function Home(props) {
  return <div>Home</div>;
}

function About(props) {
  return <div>About</div>;
}

function Layout(props) {
  return (
    <div>
      <h3>column layout</h3>
      {props.children}
    </div>
  );
}

export function App() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full ml-auto bg-grey">Hello, Posters!</div>
      <Router>
        <Home path="/" />
        <About path="/about" layout={Layout} fetchData={api.fetchProducts} />
      </Router>
    </div>
  );
}
