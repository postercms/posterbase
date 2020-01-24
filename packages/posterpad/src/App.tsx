// tslint:disable-next-line:no-submodule-imports
import '@/assets/scss/style.scss';
import * as React from 'react';
import { Abc } from '@posterpad/router';

export function App() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full ml-auto bg-grey">Hello, Posters!</div>
      <Abc />
    </div>
  );
}
