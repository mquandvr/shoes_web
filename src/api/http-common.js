import axios from 'axios'
import { HTTP_REQUEST_URL, HTTP_ACCESS_TOKEN } from '@/utils/constants'
import { AUTH_LOGOUT } from '@/store/modules/auth/auth-mutation-types'

const http = axios.create({
  baseURL: HTTP_REQUEST_URL
})

http.interceptors.response.use(undefined, function (err) {
  return new Promise(function (resolve, reject) {
    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    // if you ever get an unauthorized, logout the user
      this.$store.dispatch(AUTH_LOGOUT)
    // you can also redirect to /login if needed !
    }
    Promise.reject(reject)
    throw err;
  });
});

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
  const token = localStorage.getItem(HTTP_ACCESS_TOKEN);
  if (token) {
    http.defaults.headers.common['Authorization'] = token;
  } else {
    delete http.defaults.headers.common['Authorization'];
  }
  return config;
});

export default http