import types from './types'

export default {
  [types.TOGGLE_SIDEBAR](state, { isSidebarOpen }) {
    state.isSidebarOpen = isSidebarOpen
  },
}
