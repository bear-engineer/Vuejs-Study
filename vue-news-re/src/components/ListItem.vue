<template>
  <ul class="news-list">
    <li v-for="item in setItems" :key="item.id" class="post">
      <div class="points">{{item.points || 0}}</div>
      <div class="news-title">
        <p>
          <template v-if="item.domain">
            <a :href="item.url">{{item.title}}</a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
          </template>
        </p>
        <small class="link-text">
          {{item.time_ago}} by
          <router-link v-if="item.user" :to="`/user/${item.user}`">{{item.user}}</router-link>
          <a v-else :href="item.url">{{item.domain}}</a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    setItems() {
      return this.$store.state[this.$route.name];
    }
  },
  beforeCreate() {
    const name = this.$route.name;
    let actionName = "";
    if (name === "news") {
      actionName = "FETCH_NEWS";
    } else if (name === "ask") {
      actionName = "FETCH_ASK";
    } else if (name === "jobs") {
      actionName = "FETCH_JOBS";
    }
    this.$store.dispatch(actionName);
  }
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  padding: 8px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
</style>
