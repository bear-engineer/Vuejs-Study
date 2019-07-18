<template>
  <div>News</div>
</template>

<script>
import { fetchNewsList } from "../api";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    fetchNewsList()
      .then(response => {
        this.users = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>
