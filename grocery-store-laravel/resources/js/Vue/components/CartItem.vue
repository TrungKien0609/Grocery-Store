<template>
  <div class="item-container">
    <div class="img">
      <img :src="item.image" alt="item" />
    </div>
    <div class="item">
      <div @click="toggleCart">
        <router-link :to="{ name: 'Product', params: { slug: item.slug } }">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">Item Price ${{ item.price }}</p>
        </router-link>
      </div>
      <div class="bot-tem">
        <p class="item-total">${{ item.itemTotal }}</p>
        <div class="action">
          <div @click="subtract">
            <svg-vue icon="minus" class="dark-icon"></svg-vue>
          </div>
          <p>{{ hasAdd }}</p>
          <div @click="add">
            <svg-vue icon="plus" class="dark-icon"></svg-vue>
          </div>
        </div>
        <div class="delete-item" @click="deleteOne">
          <svg-vue icon="delete" class="dark-icon"></svg-vue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {
      hasAdd: null,
    };
  },
  created() {
    this.hasAdd = this.item.hasAdd;
  },
  updated() {
    this.hasAdd = this.item.hasAdd;
  },
  methods: {
    ...mapMutations([
      "setItems",
      "setQuantityItem",
      "setTotalItems",
      "deleteCartItem",
    ]),
    toggleCart() {
      this.$emit("toggleCart");
    },
    add() {
      if (this.hasAdd < this.item.quantity) {
        this.hasAdd++;
        this.action(true);
      } else {
        this.$toaster.error("No more quantity available for this product");
      }
    },
    subtract() {
      this.hasAdd--;
      this.action(false);
      if (this.hasAdd === 0) {
        this.deleteCartItem(this.item.id);
      }
    },
    deleteOne() {
      while (this.hasAdd > 0) {
        this.subtract();
      }
    },
    checkExist(product_id) {
      return this.items.findIndex((item) => {
        return item.id === product_id;
      });
    },
    action(math) {
      if (this.checkExist(this.item.id) !== -1) {
        let index = this.checkExist(this.item.id);
        this.setQuantityItem({
          index: index,
          hasAdd: this.hasAdd,
          math: math, // add or subtract
          price: this.item.price,
        });
      } else {
        this.setItems({
          items: [
            ...this.items,
            {
              ...this.item,
              hasAdd: this.hasAdd,
              itemTotal: this.item.price,
            },
          ],
          price: this.item.price,
        });
      }
    },
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>
<style lang="scss" scoped>
.item-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  font-size: 0.85rem;
  transition: 0.25s;
  &:hover {
    background-color: rgba(249, 250, 251, 1);
  }
  cursor: pointer;
  .img {
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
    padding: 0.5rem;
    border: 1px solid #eee;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.2rem;
    .item-name {
      color: #000;
      font-weight: 500;
    }
    .item-price {
      font-size: 0.8rem;
      color: rgb(156 163 175);
      margin-bottom: 0.5rem;
    }
    .bot-tem {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .item-total {
        font-weight: 600;
        font-family: sans-serif;
        font-size: 1rem;
        color: #000;
      }
      .action {
        display: flex;
        justify-content: flex-start;
        background-color: #fff;
        border-radius: 5px;
        padding: 0.25rem 0;
        .dark-icon {
          transform: scale(0.65);
          margin: 0 0.7rem;
          padding: 0.1rem;
          ::v-deep path {
            fill: #ccc;
          }
        }
        p {
          font-weight: 600;
          color: #000;
        }
      }
      .delete-item {
        .dark-icon {
          transform: scale(0.65);
          width: 30px;
          height: auto;
          margin: 0;
          padding: 0;
          ::v-deep path {
            fill: rgb(248 113 113);
          }
        }
      }
    }
  }
}
</style>
