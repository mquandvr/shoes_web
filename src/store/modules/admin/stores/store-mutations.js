import { STORE_REQUEST_GET_LIST } from './store-mutation-types'

// mutations
export default {
    [STORE_REQUEST_GET_LIST] (state, data) {
        state.data = data
    }
}