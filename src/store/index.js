import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth/auth-index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    auth
  },
  strict: debug
})

export default store