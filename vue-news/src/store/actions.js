import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => context.commit("SET_NEWS", response.data))
      .catch(error => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => context.commit("SET_JOBS", response.data))
      .catch(error => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => context.commit("SET_ASK", response.data))
      .catch(error => console.log(error));
  },
  FETCH_USER(context, username) {
    fetchUserInfo(username)
      .then(response => context.commit("SET_USER", response.data))
      .catch(error => console.log(error));
  },
  FETCH_ITEM(context, id) {
    fetchItem(id)
      .then(response => {
        context.commit("SET_ITEM", response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }
};
