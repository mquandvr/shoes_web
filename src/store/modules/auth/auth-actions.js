import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './auth-mutation-types'
import { HTTP_ACCESS_TOKEN } from '@/utils/constants'
import http from '@/api/http-common'
import qs from 'qs'


// actions
export const doLogin = ({ commit }, data) => {
    return new Promise((resolve, reject) => {

        const params = qs.stringify({
            username: data.username,
            password: data.password,
            grant_type: 'password'
        })

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        commit(AUTH_REQUEST)
        http.post('oauth/token', params, config)
        .then(respToken => {
            // dispatch("user/getUserRole", data)
            // .then(respRole => {
                // const token = resp.data.token
                localStorage.setItem(HTTP_ACCESS_TOKEN, respToken.data.access_token)
                
                commit(AUTH_SUCCESS, respToken.data.access_token)
                
                // resolve(respRole)
                resolve(respToken)
            // })

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