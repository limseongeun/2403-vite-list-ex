import { createStore } from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'

// Create a new store instance.
export const store = createStore({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedList(state) {
      return state.list
    },
    fetchedItem(state) {
      return state.item
    },
  },
  mutations,
  actions,
});