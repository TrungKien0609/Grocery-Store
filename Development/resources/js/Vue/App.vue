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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Frame",
  components: {
    Navigation: () => import("./components/Navigation.vue"),
    Footer: () => import("./components/Footer.vue"),
    Account: () => import("./components/Account.vue"),
  },
  data() {
    return {
      error: null,
      account: null,
    };
  },
  created() {
    // localStorage.clear()
    this.checkError();
    this.getAllCategories();
    this.setCartOnLoad();
    this.firstLoadUserData();
  },
  updated() {
    this.checkError();
  },
  methods: {
    checkError() {
      if (this.$router.currentRoute.name === "NotFound") {
        this.error = true;
      } else {
        this.error = false;
      }
    },
    toggleBlurBody() {
      document.getElementsByTagName("html")[0].classList.toggle("overflow");
    },
    toggleAccount() {
      this.account = !this.account;
      this.toggleBlurBody();
    },
    ...mapActions(["getAllCategories", "firstLoadUserData"]),
    ...mapMutations(["setCartOnLoad"]),
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;600&display=swap");
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
  .app-content {
    max-width: 1400px;
    margin: 0 auto;
  }
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
