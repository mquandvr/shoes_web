import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth/auth-index'
import users from './modules/admin/users/user-index'
import stores from './modules/admin/stores/store-index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    auth,
    users,
    stores
  },
  strict: debug
})

export default store