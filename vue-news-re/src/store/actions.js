import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
} from '../api';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(response => {
        commit('SET_JOBS', response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(response => {
        commit('SET_ASK', response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, payload) {
    fetchUserInfo(payload)
      .then(response => {
        commit('SET_USER', response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, payload) {
    fetchItem(payload)
      .then(response => {
        commit('SET_ITEM', response.data);
      })
      .catch(error => console.log(error));
  },
};
