<template>
  <div id="app">
    <!-- Essential Recommended -->
    <tool-bar></tool-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  components: {
    ToolBar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
