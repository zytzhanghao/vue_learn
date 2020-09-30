import Vue from 'vue'
import Vuex from 'vuex'
import father from './modules/father'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    father
  }
})
export default store
