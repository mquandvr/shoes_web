import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './auth-mutation-types'
import { HTTP_ACCESS_TOKEN } from '@/utils/constants'
import axios from 'axios'

// actions
export const doLogin = ({commit}, user) => {
    console.log(user)
    commit(AUTH_REQUEST)
    return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        axios.get('https://yesno.wtf/api')
        .then(resp => {
            // const token = resp.data.token
            const token = 'eyJz93a...k4laUWw'
            localStorage.setItem(HTTP_ACCESS_TOKEN, token)
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit(AUTH_SUCCESS, token)
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
    // remove the axios default header
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem(HTTP_ACCESS_TOKEN)
    commit(AUTH_LOGOUT)
}

export default {
    doLogin,
    doLogout
}