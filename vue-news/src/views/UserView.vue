<template>
  <div>
    <p>name : {{fetchedUser.id}}</p>
    <p>karma : {{fetchedUser.karma}}</p>
    <p>created_at : {{fetchedUser.created}}</p>
    <p>about : {{fetchedUser.about}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedUser"])
  },
  created() {
    this.$store.dispatch("FETCH_USER", this.$route.params.id);
  }
};
</script>

<style>
</style>
