import axios from 'axios'
import types from './types'

export default {
  fetchNews({ commit }) {
    axios
      .get(
        'https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=153&ELEMENT_ORDER%5bID%5d=DESC'
      )
      .then((response) => {
        commit(types.SET_NEWS, response.data.result)
      })
      .catch((error) => console.log(error))
  },
}
