<template>
  <div>
    <section>
      <div class="user-container">
        <div>User</div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        </div>
        <div>
          <time>{{fetchedItem.time_ago}}</time>
        </div>
        <h2>{{fetchedItem.title}}</h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  created() {
    this.$store.dispatch("FETCH_ITEM", this.$route.params.id);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
</style>
