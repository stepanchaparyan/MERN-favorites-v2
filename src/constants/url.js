import { serverUrl, chatServerUrl } from '../../environment';

const API = 'api';

export const URL = {
  AUTH: `${serverUrl}/${API}/auth`,
  REGISTER: `${serverUrl}/${API}/register`,
  FAVITEM: `${serverUrl}/${API}/favItem`,
  FAVITEM_ADD: `${serverUrl}/${API}/favItem/add`,
  FAVITEM_UPDATE: `${serverUrl}/${API}/favItem/update`,
  PROFILE: `${serverUrl}/${API}/profile`,
  PROFILE_ADD: `${serverUrl}/${API}/profile/add`,
  PROFILE_UPDATE: `${serverUrl}/${API}/profile/update`,
  UPLOAD: `${serverUrl}/${API}/upload`,
  PRODUCTS: `${serverUrl}/${API}/products`,
  CARTS: `${serverUrl}/${API}/carts`,
  CHAT: `${chatServerUrl}`,
};
