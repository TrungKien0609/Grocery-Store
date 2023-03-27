<template>
  <div class="user-container">
    <div class="dash-board">
      <router-link :to="{ name: 'CommonInfo' }" class="link-dark">
        <div class="name">
          <svg-vue icon="dashboard" class="dark-icon"></svg-vue>Dashboard
        </div>
      </router-link>
      <router-link :to="{ name: 'MyOrders' }" class="link-dark">
        <div class="name">
          <svg-vue
            icon="list"
            class="dark-icon"
            viewBox="0 0 550 550"
          ></svg-vue>
          My Orders
        </div>
      </router-link>
      <router-link :to="{ name: 'UpdateProfile' }" class="link-dark">
        <div class="name">
          <svg-vue icon="setting" class="dark-icon"></svg-vue>
          Update Profile
        </div>
      </router-link>
      <router-link :to="{ name: 'ChangePassword' }" class="link-dark">
        <div class="name" v-if="!userProvider">
          <svg-vue icon="change-password" class="dark-icon"></svg-vue>
          Change Password
        </div>
      </router-link>
      <div class="name" @click="logoutUser">
        <svg-vue icon="unlock" class="dark-icon"></svg-vue> Logout
      </div>
    </div>
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UserDashBoard",
  created() {
    this.getOrderInfo();
  },
  updated() {
    this.getOrderInfo();
  },
  methods: {
    ...mapActions(["logout", "getOrderInfo"]),
    logoutUser() {
      this.logout().catch((err) => {
        this.$toaster.error("Some thing went wrong. Try again later on");
      });
    },
  },
  computed: {
    ...mapState(["userProvider"]),
  },
};
</script>
<style lang="scss" scoped>
.user-container {
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  background-color: rgb(249 250 251);
  padding: 2.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
  }
  .dash-board {
    position: sticky;
    top: 138px;
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    max-height: 300px;
    background-color: #fff;
    border-radius: 7px;
    padding: 1rem 2.5rem;
    @media (max-width: 1024px) {
      flex-direction: column;
      max-width: 100%;
      position: initial;
    }
    @media (max-width: 600px) {
      padding: 1rem;
    }
    .name {
      width: 100%;
      margin: 1rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.92rem;
      padding: 0.5rem;
      color: #000;
      border-radius: 5px;
      transition: 0.25s;
      cursor: pointer;
      .dark-icon {
        width: 16px;
        height: auto;
        margin-right: 0.5rem;
        margin-top: 2px;
        ::v-deep path {
          fill: transparent;
          color: #333;
        }
      }
      &:hover {
        background-color: rgb(249 250 251);
        color: #10b981;
        .dark-icon {
          ::v-deep path {
            color: #10b981;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 2.5rem 2rem;
    background-color: #fff;
    border-radius: 7px;
    min-height: 300px;
    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }
  }
}
</style>
