import { baseUrl } from '../settings';

const handleResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

export const signUp = ({ email, password }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  return fetch(`${baseUrl}register/`, requestOptions).then(handleResponse);
};

export const login = ({ email, password }) => {};
