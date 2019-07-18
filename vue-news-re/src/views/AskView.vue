<template>
  <div>
    <div v-for="item in fetchAsk" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
  computed: {
    ...mapGetters(["fetchAsk"])
  }
};
</script>

<style>
</style>
