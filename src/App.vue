<template>
  <div class="app">
    <!-- переход на страницу -->
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from "@/components/UI/NavBar.vue";
export default {
  components: {
    navigation,
  },
};
</script>

<style>
* {
  margin: 0;
}
.app {
  box-sizing: border-box;
}
h1,
h2 {
  cursor: default;
}
</style>
