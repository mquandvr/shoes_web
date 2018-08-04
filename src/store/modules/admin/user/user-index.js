import state from './user-state'
import actions from './user-actions'
import getters from './user-getters'
import mutations from './user-mutations'

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};