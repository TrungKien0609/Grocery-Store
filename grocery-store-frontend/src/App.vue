<template>
  <div class="app-container">
    <Account v-show="account" @toggleAccount="toggleAccount" />
    <Navigation
      v-show="!error"
      @toggleBlurBody="toggleBlurBody"
      @toggleAccount="toggleAccount"
    />
    <router-view class="app-content" />
    <Footer v-show="!error" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import Account from "./components/Account.vue";
export default {
  name: "Frame",
  components: {
    Navigation,
    Footer,
    Account,
  },
  data() {
    return {
      error: null,
      account: null,
    };
  },
  created() {
    this.error = false;
    if (this.$router.currentRoute.name === "NotFound") {
      this.error = true;
    }
  },
  methods: {
    toggleBlurBody() {
      document.getElementsByTagName("html")[0].classList.toggle("overflow");
    },
    toggleAccount() {
      this.account = !this.account;
      this.toggleBlurBody();
    },
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
html {
  scroll-behavior: smooth;
}
html.overflow {
  overflow: hidden;
  padding-right: 17px;
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
a {
  text-decoration: none;
}
.app-container {
  display: flex;
  flex-direction: column;
  position: relative;
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
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
  z-index: 99;
  background-color: #000;
  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
</style>
