import Vue from 'vue'
import Vuex from 'vuex'
// import 'babel-polyfill'

import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    app,
    user
  }
})

export default store
