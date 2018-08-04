import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR, AUTH_PERMISSION } from './user-mutation-types'

// mutations
export default {
    [AUTH_REQUEST] (state) {
        state.status = 'loading'
    },
    [AUTH_SUCCESS] (state, token) {
        state.status = 'success'
        state.token = token
    },
    [AUTH_PERMISSION] (state, permission) {
        state.permission = permission
    },
    [AUTH_ERROR] (state) {
        state.status = 'error'
    },
    [AUTH_LOGOUT] (state) {
        state.status = ''
        state.token = ''
    }
}