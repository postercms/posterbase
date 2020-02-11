// tslint:disable-next-line:no-submodule-imports
import '@/assets/scss/style.scss';
import React from 'react';
import { Router } from '@posterpad/router';
import { Home, Start, Token } from '@/pages';

// function beforeEach(props, route, req, ctx) {
//   if (props.public) {
//     return route;
//   }
//   if (!localStorage.githubToken) {
//     return Navi.redirect(
//       `/token${props.path ? `?redirect=${props.path}` : ''}`,
//     );
//   }
//   return route;
// }

export function App() {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <Router>
          <Home />
          <Token path="/token" />
          <Start path="/start" />
        </Router>
        <p className="text-center text-gray-500 text-xs">&copy; Posterbase</p>
      </div>
    </div>
  );
}
