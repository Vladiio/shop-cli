import { baseUrl } from '../settings';

const handleResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

export const signUp = ({ username, password }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch(`${baseUrl}register/`, requestOptions).then(handleResponse);
};

export const login = ({ username, password }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch(`${baseUrl}/api/login/`, requestOptions).then(handleResponse);
};
