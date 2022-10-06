// Core
import Vue from 'vue'
import Vuex from 'vuex'
// Root store
import * as state from './root/state'
import * as getters from './root/getters'
import * as actions from './root/actions'
import * as mutations from './root/mutations'
// Modules
import modules from './modules'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
  })



