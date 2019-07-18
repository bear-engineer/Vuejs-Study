<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div>
        <p>
          <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
        </p>
        <p>{{item.time_ago}}</p>
      </div>
    </div>
    <h2>{{item.title}}</h2>
    <div v-html="item.content"></div>
    <div>
      <div v-for="comment in item.comments" :key="comment.id">
        <h3>{{comment.user}}</h3>
        <div v-html="comment.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      item: state => state.item
    })
  },
  beforeCreate() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  line-height: 1;
}
.fa-user {
  font-size: 2.5em;
}
</style>
