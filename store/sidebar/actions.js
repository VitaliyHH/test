import types from './types'

export default {
  toggleSidebar({ state, commit }) {
    const isSidebarOpen = state.isSidebarOpen

    commit(types.TOGGLE_SIDEBAR, { isSidebarOpen: !isSidebarOpen })
  },

  closeSidebar({ commit }) {
    commit(types.TOGGLE_SIDEBAR, { isSidebarOpen: false })
  },

  openSidebar({ commit }) {
    commit(types.TOGGLE_SIDEBAR, { isSidebarOpen: true })
  },
}
