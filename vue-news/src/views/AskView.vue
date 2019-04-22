<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
      <small>
        <time>{{item.time_ago}}</time>
        {{item.user}}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"])
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style>
</style>
