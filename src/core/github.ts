import axios from 'axios';

const githubClient = axios.create({
  baseURL: 'https://api.github.com',
});

export const createGithubClient = (token: string) => {
  githubClient.defaults.headers.common.Authorization = `token ${token}`;
  // http.defaults.headers.common['X-OAuth-Scopes'] = `gist`;
  // http.defaults.headers.common['X-Accepted-OAuth-Scopes'] = `gist`;
  return githubClient;
};

export default createGithubClient;
