<template>
  <div class="product-container">
    <div class="first-look">
      <div class="image" @click="toggleShowFullProduct">
        <img :src="product.image" alt="product" />
      </div>
      <p class="unit">{{ product.unit }}</p>
      <p class="name">{{ product.name }}</p>
      <p class="rating">
        <star-rating
          :rating="3.5"
          :read-only="true"
          :increment="0.01"
          :star-size="15"
          :show-rating="false"
        />
      </p>
      <p class="price">
        ${{ product.price }}
        <span class="product-discount" v-if="product.discountPrice">
          ${{ product.discountPrice }}</span
        >
      </p>
      <div class="action" v-if="startBuy && hasAdd > 0">
        <div @click="subtract">
          <svg-vue icon="minus" class="dark-icon"></svg-vue>
        </div>
        {{ result }}
        <div @click="add">
          <svg-vue icon="plus" class="dark-icon"></svg-vue>
        </div>
      </div>
      <div class="add-product" @click="start" v-if="!startBuy">
        <svg-vue icon="hand-bag" class="dark-icon"></svg-vue>
      </div>
      <div class="discount-info" v-show="product.discount">
        {{ product.discount }}% Off
      </div>
      <div class="stock-info" v-show="product.stockInfo">
        {{ product.stockInfo }}
      </div>
    </div>
    <div class="go-detail" v-show="FullProduct">
      <div class="drawer" @click="toggleShowFullProduct"></div>
      <div class="content-container">
        <div class="content">
          <div class="image" @click="toggleShowFullProduct">
            <router-link
              :to="{ name: 'Product', params: { slug: product.slug } }"
            >
              <img :src="product.image" alt="image" />
            </router-link>
          </div>
          <div class="product-info">
            <div @click="toggleShowFullProduct">
              <router-link
                :to="{ name: 'Product', params: { slug: product.slug } }"
                class="dark-link"
              >
                <h3 class="title">{{ product.name }}</h3>
              </router-link>
            </div>
            <div class="stock-info">{{ product.stock_info }}</div>
            <div class="rating">
              <star-rating
                :rating="3.8"
                :read-only="true"
                :increment="0.01"
                :star-size="20"
                :show-rating="false"
              />
            </div>
            <p class="description">
              {{ product.description }}
            </p>
            <div class="price">
              ${{ product.price }}
              <span class="dicount-price" v-if="product.discount"
                >${{ product.original_price }}</span
              >
            </div>
            <div class="action">
              <div class="math">
                <div @click="checkWillAdd">
                  <svg-vue icon="minus" class="dark-icon"></svg-vue>
                </div>
                {{ willAdd }}
                <div @click="willAdd++">
                  <svg-vue icon="plus" class="dark-icon"></svg-vue>
                </div>
              </div>
              <button @click="addMutipleProduct">Add To Cart</button>
            </div>
            <p class="category">
              Category: <span> {{ product.category }}</span>
            </p>
            <div class="list-key">
              <small>{{ product.subCategory }}</small>
              <small>{{ product.name }}</small>
            </div>
          </div>
        </div>
        <div class="close" @click="toggleShowFullProduct">
          <svg-vue
            icon="times"
            class="dark-icon"
            viewBox=" 7 7  10 10"
          ></svg-vue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import { mapState, mapMutations } from "vuex";
export default {
  name: "product",
  props: ["product"],
  components: {
    StarRating,
  },
  data() {
    return {
      startBuy: null,
      FullProduct: null,
      hasAdd: 0,
      willAdd: 1,
    };
  },
  created() {
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
  },
  updated() {
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
  },
  methods: {
    toggleBlurBody() {
      document.getElementsByTagName("html")[0].classList.toggle("overflow");
    },
    toggleShowFullProduct() {
      this.FullProduct = !this.FullProduct;
      this.toggleBlurBody();
    },
    ...mapMutations([
      "setItems",
      "setQuantityItem",
      "setTotalItems",
      "deleteCartItem",
    ]),
    start() {
      this.add();
      this.startBuy = true;
    },
    add() {
      if (this.hasAdd < this.product.quantity) {
        this.hasAdd++;
        this.action(true);
      } else {
        this.$toaster.error("No more quantity available for this product");
      }
    },
    subtract() {
      this.hasAdd--;
      this.startBuy = this.hasAdd === 0 ? false : true;
      this.action(false);
      if (this.hasAdd === 0) {
        this.deleteCartItem(this.product.id);
      }
    },
    checkExist(product_id) {
      return this.items.findIndex((item) => {
        return item.id === product_id;
      });
    },
    action(math) {
      if (this.checkExist(this.product.id) !== -1) {
        let index = this.checkExist(this.product.id);
        this.setQuantityItem({
          index: index,
          hasAdd: this.hasAdd,
          math: math, // add or subtract
          price: this.product.price,
        });
      } else {
        this.setItems({
          items: [
            ...this.items,
            {
              ...this.product,
              hasAdd: this.hasAdd,
              itemTotal: this.product.price,
            },
          ],
          price: this.product.price,
        });
      }
    },
    addMutipleProduct() {
      for (let i = 0; i < this.willAdd; i++) {
        if (this.hasAdd < this.product.quantity) {
          this.hasAdd++;
          this.action(true);
          if (i === this.willAdd - 1) {
            this.$toaster.success(
              this.willAdd + " " + this.product.name + " has added to cart"
            );
          }
        } else {
          this.$toaster.error("No more quantity available for this product");
          break;
        }
      }
    },
    checkWillAdd() {
      if (this.willAdd > 1) this.willAdd--;
    },
  },
  computed: {
    ...mapState([
      "items",
      "totalItems",
      "totalUniqueItems",
      "cartTotal",
      "isEmpty",
    ]),
    result() {
      let index = this.items.findIndex((item) => {
        return item.id === this.product.id;
      });
      if (index !== -1) {
        return this.$store.state.items[index].hasAdd;
      } else return 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.product-container {
  .first-look {
    width: 100%;
    position: relative;
    text-align: left;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #eee;
    overflow: hidden;
    .image {
      width: 100%;
      cursor: pointer;
      img {
        width: 70%;
        margin: 0 auto;
        transition: 0.25s;
        @media (max-width: 1024px) {
          width: 80%;
        }
        @media (max-width: 600px) {
          width: 100%;
        }
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
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
    .rating {
      margin: 0 1rem;
    }
    .price {
      margin: 1rem;
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
        ::v-deep path {
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
          ::v-deep path {
            fill: #fff;
          }
        }
      }
      cursor: pointer;
      .dark-icon {
        width: 37px;
        height: auto;
        ::v-deep path {
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
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .stock-info {
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 0.75rem;
      color: rgba(220, 38, 38, 0.8);
      background-color: rgba(254, 226, 226, 1);
      padding: 0.2rem 0.5rem;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .go-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    .content-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        z-index: 101;
        width: 100%;
        max-width: 900px;
        min-height: 450px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        padding: 1.5rem;
        .product-info {
          overflow-y: auto;
          .title {
            color: #000;
            font-family: sans-serif;
            font-size: 1.5rem;
          }
          .stock-info {
            display: inline-block;
            font-size: 0.75rem;
            color: rgba(5, 150, 105, 1);
            background-color: rgba(209, 250, 229, 1);
            padding: 0.2rem 0.5rem;
            border-radius: 9999px;
            font-weight: 600;
            margin: 0.5rem 0;
            &.stock-out {
              color: rgba(220, 38, 38, 0.8);
              background-color: rgba(254, 226, 226, 1);
            }
          }
          .description {
            font-size: 0.875rem;
            color: rgba(107, 114, 128, 1);
            line-height: 1.75rem;
            margin-bottom: 1rem;
            max-height: 250px;
            overflow: auto;
            &::-webkit-scrollbar {
              width: 5px;
              background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-track {
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              border-radius: 10px;
              background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 10px;
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              background-color: #10b981;
            }
          }
          .price {
            display: inline-block;
            font-family: sans-serif;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 600;
            .dicount-price {
              color: rgba(156, 163, 175, 1);
              font-weight: 400;
              font-size: 1.125rem;
              line-height: 1.75rem;
              margin-left: 0.25rem;
              text-decoration: line-through;
            }
          }
          .action {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: 1rem 0;
            grid-gap: 1rem;
            .math {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.7em 1.2rem;
              border-radius: 7px;
              border: 1px solid #ccc;
              font-weight: 600;
              font-family: sans-serif;
              .dark-icon {
                width: 18px;
                padding: 3px;
                cursor: pointer;
                ::v-deep path {
                  fill: #555;
                }
                transition: 0.25s;
                &:hover {
                  ::v-deep path {
                    fill: #ccc;
                  }
                }
              }
            }
            button {
              cursor: pointer;
              background-color: rgba(16, 185, 129, 1);
              color: #fff;
              font-weight: 600;
              font-family: sans-serif;
              border-radius: 7px;
              transition: 0.25s;
              &:hover {
                background-color: rgba(5, 150, 105, 1);
              }
            }
          }
          .category {
            color: rgba(55, 65, 81, 1);
            font-weight: 600;
            font-family: sans-serif;
            font-size: 0.85rem;
            line-height: 1.75rem;
            span {
              color: rgba(107, 114, 128, 1);
              font-size: 0.85rem;
            }
          }
          .list-key {
            width: 100%;
            margin: 0.5rem 0;
            small {
              display: inline-block;
              padding: 3px 0.5rem;
              background-color: rgba(229, 231, 235, 1);
              color: rgba(107, 114, 128, 1);
              font-weight: 600;
              font-size: 0.75rem;
              margin-right: 5px;
              border-radius: 9999px;
            }
          }
        }
      }
      .close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        width: 35px;
        height: 35px;
        z-index: 999;
        cursor: pointer;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.25s;
        &:hover {
          background-color: rgba(254, 202, 202, 1);
        }
        .dark-icon {
          width: 10px;
          height: 10px;
          display: block;
          ::v-deep path {
            fill: rgba(239, 68, 68, 1);
          }
        }
      }
    }
  }
}
</style>
