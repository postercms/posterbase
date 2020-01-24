import React, { Suspense } from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

function Landing() {
  return <div>Landing...</div>;
}

const routes = mount({
  '/': route({
    title: "Hats 'n' Flamethrowers 'r' Us",
    view: <Landing />,
  }),
});

export function Abc() {
  return (
    <Router routes={routes}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Router>
  );
}
