import React, { useState } from 'react';
import { ReactNavi } from '@posterpad/router';
import { createGithubClient } from '@/core';

export function Start(props) {
  const { navigate } = ReactNavi.useNavigation();
  if (!localStorage.githubToken) {
    navigate(`/token?redirect=start3`);
  }

  const http = createGithubClient(localStorage.githubToken);
  const [gists, setGists] = useState([]);
  http.get('/gists').then(({ data }) => {
    setGists(data);
  });
  return (
    <>
      {gists.map(({ id, description }) => (
        <div key={id}>
          <div>{description}</div>
          <div>{id}</div>
        </div>
      ))}
    </>
  );
}

export default Start;
