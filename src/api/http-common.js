import axios from 'axios'
import { HTTP_REQUEST_URL, HTTP_ACCESS_TOKEN } from '@/utils/constants'
import { AUTH_LOGOUT } from '@/store/modules/auth/auth-mutation-types'
import qs from 'qs'
const author = btoa('hendi-client:hendi-secret')

const http = axios.create({
  // baseURL: 'http://103.221.222.158:8080/api/oauth/token',
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Basic ' + author,
  // },
  // data: qs.stringify({ 'password': '12345678', 'username': 'hendi','grant_type': 'password'})
})

http.interceptors.response.use(undefined, function (err) {
  return new Promise(function (resolve, reject) {
    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    // if you ever get an unauthorized, logout the user
      this.$store.dispatch(AUTH_LOGOUT)
    // you can also redirect to /login if needed !
    }
    throw err;
  });
});

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
  const token = localStorage.getItem(HTTP_ACCESS_TOKEN);
  if (token) {
    http.defaults.headers.common['Authorization'] = token;
  } else {
    //delete http.defaults.headers.common['Authorization'];
  }
  return config;
});

export default http