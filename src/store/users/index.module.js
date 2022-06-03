import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'
export default {
  state: state,
  getters: getters,
  namespaced: true,
  mutations: mutations,
  actions: actions
}
