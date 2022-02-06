<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <svg-vue icon="bag" class="dark-icon"></svg-vue>
        Shopping Cart
      </div>
      <div class="right" @click="toggleCart">
        <svg-vue icon="times" class="dark-icon"></svg-vue>
        Close
      </div>
    </div>
    <div class="body">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
    <router-link to="#" class="link-light">
      <div class="footer">
        <p>Proceed To Checkout</p>
        <p>$169.00</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  methods: {
    toggleCart() {
      this.$emit("toggleCart");
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100vh;
  @media (max-width: 480px) {
    width: 100%;
  }
  background-color: #fff;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    align-items: center;
    background-color: rgb(238 242 255);
    cursor: pointer;
    .left,
    .right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .dark-icon {
        margin-right: 10px;
        width: 19px;
        height: 25px;
        ::v-deep path{
          fill: none;
        }
      }
    }
    .left {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
      color: #333;
    }
    .right {
      .dark-icon {
        margin-right: 0;
        transform: scale(0.7);
        width: 24px;
        height: auto;
        ::v-deep path {
          fill: #6b7280;
        }
      }
      font-size: 14px;
      color: #6b7280;
      transition: 0.25;
      &:hover {
        color: rgb(248 113 113);
        ::v-deep path {
          fill: rgb(248 113 113);
        }
      }
    }
  }
  .body {
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .footer {
    margin: 1.5rem;
    padding: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #10b981;
    border-radius: 10px;
    transition: 0.25s;
    &:hover {
      background-color: rgba(5, 150, 105, 1);
    }
    p {
      &:last-child {
        font-family: sans-serif;
        padding: 0.5rem 0.7rem;
        background-color: #fff;
        border-radius: 7px;
        color: #10b981;
        font-weight: bolder;
      }
    }
  }
}
</style>
