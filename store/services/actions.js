import axios from 'axios'
import types from './types'

export default {
  fetchServices({ commit }) {
    axios
      .get(
        'https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=152&ELEMENT_ORDER[ID]=ASC'
      )
      .then((response) => {
        commit(types.SET_SERVICES, response.data.result)
      })
      .catch((error) => console.log(error))
  },
}
