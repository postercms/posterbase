import React from 'react';
import { ReactNavi } from '@posterpad/router';
// import { http } from '@/core';

export function Home(props) {
  const { navigate } = ReactNavi.useNavigation();
  if (!localStorage.gistId) {
    console.log(2342);

    navigate('/token?redirect=/');
  }

  return <div>Home</div>;
}
