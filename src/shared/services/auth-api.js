import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const userSignup = data => {
  return authInstance.post('/users/signup', data);
};
