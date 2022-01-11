<template>
  <div class="app-container">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "navBar",
  components: {
    Navigation,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
input,
button {
  outline: none;
  border: none;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.link-light {
  text-decoration: none;
  color: #fff;
}
.link-dark {
  position: relative;
  text-decoration: none;
  color: #4b5563;
}
.light-icon,
.dark-icon {
  width: 22px;
  height: 22px;
}
.light-icon {
  path {
    fill: #fff;
  }
}
.dark-icon {
  path {
    fill: #ccc;
  }
}
.dark-arrow {
  width: 10px;
  height: auto;
  path {
    fill: #4b5563;
  }
}
</style>
