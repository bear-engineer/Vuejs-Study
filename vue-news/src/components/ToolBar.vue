<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <router-link to="/news">News</router-link>|
        </li>
        <li>
          <router-link to="/ask">Ask</router-link>|
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>|
        </li>
      </ul>
    </nav>
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
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>
