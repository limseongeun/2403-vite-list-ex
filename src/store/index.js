import { createStore } from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'

// Create a new store instance.
export const store = createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask
    }, 
    fetchedItem(state) {
      return state.item
    }
  },
  mutations,
  actions,
});