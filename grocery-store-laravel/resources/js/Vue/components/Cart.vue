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
      <CartItem v-for="(item, index) in items" :key="index" :item="item" />
      <div class="cart-empty" v-if="isEmpty">
        <div class="icon">
          <svg-vue icon="solid-cart"></svg-vue>
        </div>
        <h3 class="title">Your cart is empty</h3>
        <p class="note">
          No items added in your cart. Please add product to your cart list.
        </p>
      </div>
    </div>
    <router-link to="#" class="link-light">
      <div class="footer">
        <p>Proceed To Checkout</p>
        <p>${{ cartTotal }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
import { mapState, mapMutations } from "vuex";
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
  computed: {
    ...mapState(["items", "isEmpty", "cartTotal"]),
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
        ::v-deep path {
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
    .cart-empty {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 2.25rem;
        line-height: 2.25rem;
        color: rgb(5 150 105);
        width: 5rem;
        height: 5rem;
        border-radius: 9999px;
        background-color: rgb(209 250 229);
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          display: block;
          width: 1em;
          height: 1em;
        }
        // CSS FOR SVGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
      }
      .title {
        color: rgb(55 65 81);
        font-family: sans-serif;
        margin-top: 1.5rem;
      }
      .note {
        font-size: 0.875rem;
        color: rgb(107 114 128);
        line-height: 1.25rem;
        text-align: center;
        padding: 0 3rem;
        margin-top: 1rem;
      }
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
