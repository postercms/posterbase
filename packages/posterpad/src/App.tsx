// tslint:disable-next-line:no-submodule-imports
import '@/assets/scss/style.scss';
import React from 'react';
import { Router } from '@posterpad/router';
import { Setup } from '@/pages';

export function App() {
  return (
    <Router>
      <Setup path="setup" />
    </Router>
  );
}
