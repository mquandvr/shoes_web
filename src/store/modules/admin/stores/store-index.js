import state from './store-state'
import actions from './store-actions'
import getters from './store-getters'
import mutations from './store-mutations'

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};