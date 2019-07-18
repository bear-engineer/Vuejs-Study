import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

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
};
