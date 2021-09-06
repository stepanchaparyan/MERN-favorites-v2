import axios from 'axios';

const Authorization = 'Authorization';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  } else {
    delete axios.defaults.headers.common[Authorization];
  }
};
export default setAuthToken;
