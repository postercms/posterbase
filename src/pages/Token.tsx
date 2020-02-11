import React, { useState } from 'react';
import { ReactNavi } from '@posterpad/router';
import { createGithubClient } from '@/core';

export function Token(props) {
  const [token, setToken] = useState('');
  // const [hasToken, setHasToken] = useState(!localStorage.authToken);
  // const [gists, setGists] = useState([]);
  const { navigate } = ReactNavi.useNavigation();

  const onTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const http = createGithubClient(token);
    http.get('/gists').then(({ data }) => {
      // 200 response, token is valid
      localStorage.githubToken = token;
      setToken('');
      navigate('/start');
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="token">
          Github token
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="token"
          type="text"
          placeholder="Github token"
          value={token}
          onChange={onTokenChange}
        />
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          value="Submit"
        />
      </div>
    </form>
  );
}

export default Token;
