<template>
  <div>
    <p>name: {{user.id}}</p>
    <p>karma: {{user.karma}}</p>
    <p>created: {{user.created}}</p>
    <p>about: {{user.about}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
};
</script>

<style>
</style>
