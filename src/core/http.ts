import github from './github';

export const http = github(localStorage.authToken);
