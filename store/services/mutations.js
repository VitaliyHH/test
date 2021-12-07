import types from './types'

export default {
  [types.SET_SERVICES](state, services) {
    state.services = services
  },
}
