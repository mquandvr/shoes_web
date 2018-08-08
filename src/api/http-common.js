import axios from 'axios'
import { HTTP_PREFIX_URL, HTTP_ACCESS_TOKEN } from '@/utils/constants'
import qs from 'qs'
import { updateQueryStringParameter } from '@/utils/common'

const http = axios.create({
  baseURL: HTTP_PREFIX_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  auth: {
    username: 'hendi-client',
    password: 'hendi-secret'
  }
})

http.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
    // if you ever get an unauthorized, logout the user
    this.$store.dispatch("doLogout")

  }
  return Promise.reject(error);
});



// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
  if (localStorage.getItem(HTTP_ACCESS_TOKEN)) {
    config.url = updateQueryStringParameter(config.url, HTTP_ACCESS_TOKEN, localStorage.getItem(HTTP_ACCESS_TOKEN))
  }
  return config
});

export default http