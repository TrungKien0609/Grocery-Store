<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark sticky-top">
    <!-- Navbar Brand-->
    <router-link class="navbar-brand ps-3" :to="{ name: 'Home' }"
      >Neik Shop
      <!-- Sidebar Toggle-->
    </router-link>
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar Search-->
    <form
      class="
        d-none d-md-inline-block
        form-inline
        ms-auto
        me-0 me-md-3
        my-2 my-md-0
      "
    >
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <p
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-user fa-fw"></i>
        </p>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li class="dropdown-item" role="button">{{ userName }}</li>
          <li class="dropdown-item" role="button" @click.prevent="logout">
            Logout
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.getCookie("username").then( response => {
      this.userName = response;
    });
  },
  methods: {
    ...mapActions(["logout", "getCookie"]),
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
</style>
