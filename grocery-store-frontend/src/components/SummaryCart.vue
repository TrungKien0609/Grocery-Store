<template>
  <div class="summary-container" @click="toggleCart">
    <Bag class="dark-icon" />
    <p class="amount-item">13 Items</p>
    <p class="total-price">$169.00</p>
  </div>
</template>
<script>
import Bag from "../assets/Icons/bag2.svg";
export default {
  name: "summaryCart",
  components: {
    Bag,
  },
  methods: {
    toggleCart() {
      this.$emit("toggleCart");
    },
  },
};
</script>
<style lang="scss" scoped>
.summary-container {
  width: 100px;
  background-color: rgb(238 242 255);
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  .dark-icon {
    margin: 0.5rem 0;
    path {
      fill: #10b981;
    }
  }
  .amount-item {
    font-family: sans-serif;
    font-size: 0.85rem;
    color: #000;
    line-height: 1.3rem;
  }
  .total-price {
    width: 100%;
    font-family: sans-serif;
    background-color: rgba(4, 120, 87, 1);
    line-height: 2.7rem;
    text-align: center;
    color: #fff;
  }
}
</style>
