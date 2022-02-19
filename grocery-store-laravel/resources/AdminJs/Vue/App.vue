<template>
  <div class="admin-container">
    <NavBar v-if="!error" />
    <div id="layoutSidenav">
      <SideBar v-if="!error" />
      <div id="layoutSidenav_content">
        <router-view> </router-view>
        <Footer v-if="!error" />
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "./Components/Footer.vue";
import NavBar from "./Components/NavBar.vue";
import SideBar from "./Components/SideBar.vue";
export default {
  name: "App",
  components: {
    Footer,
    NavBar,
    SideBar,
  },
  data() {
    return {
      error: null,
    };
  },
  created() {
    this.checkError();
  },
  updated() {
    this.checkError();
  },
  methods: {
    checkError() {
      let route = this.$router.currentRoute.name;
      if (
        route === "NotFound" ||
        route === "Login" ||
        route === "Signup" ||
        route === "ForgotPassword"
      ) {
        this.error = true;
      } else {
        this.error = false;
      }
    },
  },
};
</script>
<style lang="scss">
img {
  display: block;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.global-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
.form-group {
  margin: 1rem 0;
}
.card-title {
  font-weight: 300;
}

.btn {
  font-size: 14px;
  margin-top: 20px;
}

.login-form {
  width: 330px;
  margin: 20px;
}

.sign-up {
  text-align: center;
  padding: 20px 0 0;
}

.alert {
  margin-bottom: -30px;
  font-size: 13px;
  margin-top: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#layoutSidenav_content {
  position: initial;
}
.imageWrapper {
  margin-left: 7px;
  position: relative;
  cursor: pointer;
  .hover-image {
    display: none;
    position: absolute;
    z-index: 9999;
    top: -30px;
    left: -100px;
    width: 100px;
    height: 100px;
    &.add {
      top: -105px;
      left: -35px;
    }
  }
  img {
    border: 3px solid #888;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    &:hover ~ .hover-image {
      display: block;
    }
  }
}
</style>