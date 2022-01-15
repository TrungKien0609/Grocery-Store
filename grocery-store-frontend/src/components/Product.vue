<template>
  <div class="product-container">
    <router-link to="#">
      <div class="image">
        <img src="@/assets/images/products/Green-Leaf.jpg" alt="product" />
      </div>
    </router-link>
    <p class="unit">{{ unit }}</p>
    <p class="name">{{ name }}</p>
    <p class="price">
      {{ price }}
      <span class="product-discount" v-if="discountPrice">{{
        discountPrice
      }}</span>
    </p>
    <div class="action" v-show="startBuy">
      <Dash class="dark-icon" />
      {{ buyAmount }}
      <Plus class="dark-icon" />
    </div>
    <div class="add-product" @click="start" v-show="!startBuy">
      <HandBag class="dark-icon" />
    </div>
    <div class="discount-info" v-show="discount">{{ discount }}</div>
  </div>
</template>
<script>
import Plus from "../assets/Icons/plus.svg";
import Dash from "../assets/Icons/minus.svg";
import HandBag from "../assets/Icons/hand-bag.svg";
export default {
  name: "product",
  props: [
    "link",
    "unit",
    "image",
    "name",
    "price",
    "discountPrice",
    "buyAmount",
    "discount",
  ],
  components: {
    Plus,
    Dash,
    HandBag,
  },
  data() {
    return {
      startBuy: null,
    };
  },
  methods: {
    start() {
      this.startBuy = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.product-container {
  width: 100%;
  position: relative;
  text-align: left;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  overflow: hidden;
  .image {
    width: 65%;
    margin: 0 auto;
    transition: 0.25s;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  .unit {
    margin: 0 1rem;
    font-size: 0.8rem;
    color: rgba(156, 163, 175, 1);
    line-height: 1.5rem;
  }
  .name {
    margin: 0 1rem;
    color: rgba(75, 85, 99, 1);
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
  .price {
    margin: 1.5rem 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: sans-serif;
    color: #000;
    .product-discount {
      font-size: 0.85rem;
      color: rgb(156 163 175);
      text-decoration: line-through;
    }
  }
  .action,
  .add-product {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #10b981;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    .dark-icon {
      transform: scale(0.5);
      cursor: pointer;
      path {
        fill: #ccc;
      }
    }
    font-size: 0.8rem;
    font-weight: 600;
  }
  .add-product {
    background-color: #fff;
    border: 1px solid #eee;
    padding: 0;
    transition: 0.25s;
    &:hover {
      background-color: #10b981;
      .dark-icon {
        path {
          fill: #fff;
        }
      }
    }
    cursor: pointer;
    .dark-icon {
      width: 37px;
      height: auto;
      path {
        fill: #10b981;
      }
    }
  }
  .discount-info {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 0.75rem;
    color: #fff;
    background-color: rgb(249 115 22);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
