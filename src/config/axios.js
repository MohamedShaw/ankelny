import axios from 'axios';
import settings from './settings';

export function setAccessToken(access_token) {
  axios.defaults.headers.common['Content-type'] = `application/x-www-form-urlencoded`;
  axios.defaults.headers.common['Accept'] = `application/json`;
  axios.defaults.headers.common = {'Authorization': `bearer ${access_token}`}
  // axios.defaults.headers.common['accept'] = `application/json`;
}

export function clearToken(access_token) {
  axios.defaults.headers.common['Content-type'] = null;
  try {
    localStorage.removeItem('access_token');
  } catch (err) {}
}

export default ({ dispatch }) => {
  axios.defaults.baseURL = settings.API_URL;
  axios.defaults.headers.common['Content-type'] = `application/x-www-form-urlencoded`;
  axios.defaults.headers.common['Accept'] = `application/json`;
  axios.defaults.headers.common['Authorization'] = `application/json`;

}
