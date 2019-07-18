<template>
  <header class="header">
    <router-link to="/news">News</router-link>|
    <router-link to="/ask">Ask</router-link>|
    <router-link to="/jobs">Jobs</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background: #42b883;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>
  