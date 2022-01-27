<template>
  <div class="user-container">
    <div class="dash-board">
      <router-link :to="{ name: 'CommonInfo' }" class="link-dark">
        <div class="name"><DashBoard class="dark-icon" /> Dashboard</div>
      </router-link>
      <router-link :to="{ name: 'MyOrders' }" class="link-dark">
        <div class="name">
          <Orders class="dark-icon" viewBox="0 0 550 550" /> My Orders
        </div>
      </router-link>
      <router-link :to="{ name: 'UpdateProfile' }" class="link-dark">
        <div class="name"><Setting class="dark-icon" /> Update Profile</div>
      </router-link>
      <router-link :to="{ name: 'ChangePassword' }" class="link-dark">
        <div class="name"><ChangePass class="dark-icon" /> Change Password</div>
      </router-link>
      <div class="name"><Logout class="dark-icon" /> Logout</div>
    </div>
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script>
import DashBoard from "../assets/Icons/dashboard.svg";
import Orders from "../assets/Icons/list.svg";
import Setting from "../assets/Icons/setting.svg";
import ChangePass from "../assets/Icons/change-password.svg";
import Logout from "../assets/Icons/unlock.svg";
export default {
  name: "UserDashBoard",
  components: {
    DashBoard,
    Orders,
    Setting,
    ChangePass,
    Logout,
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
        path {
          fill: #000;
        }
      }
      &:hover {
        background-color: rgb(249 250 251);
        color: #10b981;
        .dark-icon {
          path {
            fill: #10b981;
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
