import types from './types'

export default {
  [types.SET_NEWS](state, news) {
    state.news = news
  },
}
