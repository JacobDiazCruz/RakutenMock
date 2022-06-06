import Vue from "vue"
import Vuex from "vuex"
import global from "./global/index.module"
import cities from "./cities/index.module"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    global,
    cities
  }
})
export default store