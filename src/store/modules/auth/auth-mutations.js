import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './auth-mutation-types'

// mutations
export default {
    [AUTH_REQUEST] (state) {
        state.status = 'loading'
    },
    [AUTH_SUCCESS] (state, token) {
        state.status = 'success'
        state.token = token
    },
    [AUTH_ERROR] (state) {
        state.status = 'error'
    },
    [AUTH_LOGOUT] (state) {
        state.status = ''
        state.token = ''
    }
}