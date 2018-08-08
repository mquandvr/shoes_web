import { 
    USER_REQUEST_GET_ROLE_LIST, 
    STORE_REQUEST_GET_LIST,
    USER_REQUEST_GET_LIST, 
    USER_REQUEST_UPDATE_USER, 
    USER_REQUEST_GET_USER_BY_ID,
    USER_MODE_SCREEN,
} from './user-mutation-types'

// mutations
export default {
    [USER_REQUEST_GET_ROLE_LIST] (state, roles) {
        state.roles = roles
    },
    [STORE_REQUEST_GET_LIST] (state, stores) {
        let data = []

        for (const element of stores) {
            let list = {
                'value': element.id,
                'text': element.name
            }

             data.push(list)
        }
        state.stores = data
    },
    [USER_REQUEST_GET_LIST] (state, data) {
        state.users = data
    },
    [USER_REQUEST_GET_USER_BY_ID] (state, data) {
        state.user = data
    },
    [USER_REQUEST_UPDATE_USER] (state, data) {
        state.user = data
        state.modeScreen = ''
    },
    [USER_MODE_SCREEN] (state, data) {
        state.modeScreen = data
    }
}