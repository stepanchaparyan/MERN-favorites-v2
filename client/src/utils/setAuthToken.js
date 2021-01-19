import axios from 'axios';

const auth_token = 'auth-token';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common[auth_token] = token;
  } else {
    delete axios.defaults.headers.common[auth_token];
  }
};
export default setAuthToken;
