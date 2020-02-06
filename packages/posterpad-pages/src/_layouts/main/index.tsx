import React from 'react';

import { MainNavbar } from '@posterpad/components';

export function MainLayout() {
  return (
    <div className="flex flex-wrap">
      <MainNavbar title="PosterPad" />
      <div className="w-full ml-auto bg-grey">Hello, Posters!</div>
    </div>
  );
}

export default MainLayout;
