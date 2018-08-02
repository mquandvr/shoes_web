import axios from 'axios'
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from './auth/auth-mutation-types'

// initial state
const state = {
    status: '',
    token: localStorage.getItem('user-token') || ''
}

// getters
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

// actions
const actions = {
    [AUTH_REQUEST]: ({commit}, user) => {
        console.log(user)
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST)
            axios.get('https://yesno.wtf/api')
            .then(resp => {
                // const token = resp.data.token
                const token = 'eyJz93a...k4laUWw'
                localStorage.setItem('user-token', token)
                // Add the following line:
                axios.defaults.headers.common['Authorization'] = token
                commit(AUTH_SUCCESS, resp)
                //dispatch(USER_REQUEST)
                resolve(resp)
            })
            .catch(err => {
                commit(AUTH_ERROR, err)
                localStorage.removeItem('user-token')
                reject(err)
            })
            
            // const token = 'eyJz93a...k4laUWw'
            // localStorage.setItem('user-token', token)
            // axios.defaults.headers.common['Authorization'] = token
            // commit(AUTH_SUCCESS, token)
        })
    },
    [AUTH_LOGOUT]: ({commit}) => {
        // remove the axios default header
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem('user-token')
        commit(AUTH_LOGOUT)
    }
}

// mutations
const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, token) => {
        state.status = 'success'
        state.token = token
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
        state.status = ''
        state.token = ''
    }
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}