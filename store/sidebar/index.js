import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,

  state: () => ({
    isSidebarOpen: false,
  }),

  mutations,
  actions,
  getters,
}
