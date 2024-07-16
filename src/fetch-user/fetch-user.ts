import axios from 'axios';

export function fetchUser() {
  return axios.get('/url').then((response) => response.data);
}
