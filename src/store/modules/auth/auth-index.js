import state from './auth-state'
import actions from './auth-actions'
import getters from './auth-getters'
import mutations from './auth-mutations'

export default {
    namespaced: false,
    actions,
    getters,
    mutations,
    state
};