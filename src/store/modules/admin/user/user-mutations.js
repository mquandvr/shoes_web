import { USER_REQUEST } from './user-mutation-types'

// mutations
export default {
    [USER_REQUEST] (state, role) {
        state.userRole = role
    },
}