import Vue from "vue"
import Vuex from "vuex"
import global from "./global/index.module"
import chats from "./chats/index.module"
import users from "./users/index.module"
import profiles from "./profiles/index.module"
import conversations from "./conversations/index.module"
import curriculums from "./curriculums/index.module"
import mentors from "./mentors/index.module"
import modules from "./modules/index.module"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    global,
    users,
    chats,
    profiles,
    conversations,
    mentors,
    modules,
    curriculums
  }
})
export default store