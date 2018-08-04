import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR, AUTH_PERMISSION } from './auth-mutation-types'
import { HTTP_ACCESS_TOKEN } from '@/utils/constants'
import http from '@/api/http-common'
import qs from 'qs';
import axios from 'axios'
// actions
export const doLogin = ({commit}, user) => {
    console.log(user)
    console.log('http '+ http)
    commit(AUTH_REQUEST)
    return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        const params = new URLSearchParams();
        params.append('password', '12345678');
        params.append('username', 'hendi');
        params.append('grant_type', 'password');
        
        // axios({
        //     'http://103.221.222.158:8080/api/oauth/token', 
        //     , {
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //       'Authorization': 'Basic ' + btoa('hendi-client:hendi-secret'),
        //     }
        // })
        const config = {
            // headers:  {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //     // 'Authorization': 'Basic ' + btoa('hendi-client:hendi-secret'),
            //     'Access-Control-Allow-Origin':'*',
            //   },
            //   withCredentials: true,
            //   auth: {
            //     username: 'hendi-client',
            //     password: 'hendi-secret'
            //   }
        }
        axios({
            method: 'get',
            url: 'https://www.yesno.wtf/api',
            params,
            config
          })
        .then(resp => {
            // const token = resp.data.token
            //const token = 'eyJz93a...k4laUWw'
            console.log(resp)
            localStorage.setItem(HTTP_ACCESS_TOKEN, resp.data[HTTP_ACCESS_TOKEN])

            commit(AUTH_SUCCESS, resp.data[HTTP_ACCESS_TOKEN])
            commit(AUTH_PERMISSION, user.username)
            //dispatch(USER_REQUEST)
            resolve(resp)
        })
        .catch(err => {
            commit(AUTH_ERROR, err)
            localStorage.removeItem(HTTP_ACCESS_TOKEN)
            reject(err)
        })
    })
}

export const doLogout = ({commit}) => {
    localStorage.removeItem(HTTP_ACCESS_TOKEN)
    commit(AUTH_LOGOUT)
}

export default {
    doLogin,
    doLogout
}