import React, { useState } from 'react';
import { ReactNavi } from '@posterpad/router';
import { http } from '@/core';
import { GistSelector } from './GistSelector';
import { AuthToken } from './AuthToken';

export function Auth(props) {
  const [token, setToken] = useState(localStorage.authToken);
  const [hasToken, setHasToken] = useState(!localStorage.authToken);
  const [gists, setGists] = useState([]);
  const navigation = ReactNavi.useNavigation();

  if (!hasToken) {
    navigation.navigate('/auth/token');
  }

  const onTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    http.get('/gists').then(({ data }) => {
      setHasToken(false);
      setToken('');
      setGists(data);
      localStorage.authToken = token;
      console.log(data);
      // navigation.navigate('/');
    });
  };
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        {hasToken && (
          <AuthToken
            token={token}
            onSubmit={onSubmit}
            onTokenChange={onTokenChange}
          />
        )}
        {!hasToken && <GistSelector gists={gists} />}
        <p className="text-center text-gray-500 text-xs">&copy; Posterbase</p>
      </div>
    </div>
  );
}

export default Auth;
