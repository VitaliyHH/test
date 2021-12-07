import Vuex from 'vuex'

import news from './news'
import services from './services'
import sidebar from './sidebar'

export default () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    modules: {
      news,
      sidebar,
      services,
    },
  })
