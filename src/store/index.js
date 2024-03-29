import { createStore } from 'vuex'

import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

// Create a new store instance.
export const store = createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    count: 0,
  },
  getters: {
    fetchedAsk(state) {
      return state.ask
    },
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    increment(state) {
      state.count++;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
});