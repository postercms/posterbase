import axios from 'axios';

export const github = (authToken: string) => {
  const http = axios.create({
    baseURL: 'https://api.github.com',
  });
  http.defaults.headers.common.Authorization = `token ${authToken}`;
  return;
};

export default github;
