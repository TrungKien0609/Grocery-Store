<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "navBar",
  components: {
    NavBar,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
