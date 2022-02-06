<template>
  <div class="search-container">
    <div class="categories">
      <h3 class="title">Categories</h3>
      <div class="list-categories">
        <Category
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </div>
    </div>
    <div class="results">
      <div class="header" v-show="result">
        <p>Total <span> 7</span> items Found</p>
        <div class="sort">
          <select ref="select" @change="sortAction">
            <option value="0" v-show="!sort">Sort by price</option>
            <option value="1">Low to Hight</option>
            <option value="2">Height to low</option>
          </select>
        </div>
      </div>
      <div class="body" v-show="result">
        <Product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
      <div class="no-result" v-show="!result">
        <svg-vue icon="no-result" viewBox="0 0 862 644"></svg-vue>
        <h3 class="title">Sorry, we can not find this product 😞</h3>
      </div>
    </div>
  </div>
</template>
<script>
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
export default {
  name: "Search",
  components: {
    Category,
    Product,
  },
  data() {
    return {
      categories: [
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
        {
          image: "",
          name: "Fish & Meat",
          list: [
            {
              link: "",
              name: "Fish",
            },
            {
              link: "",
              name: "Meat",
            },
          ],
        },
      ],
      products: [
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 14,
          buyAmount: "0",
          stockInfo: "Stock Out",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 12,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 11,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 10,
          buyAmount: "0",
        },

        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 19,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 8,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 25,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 90,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 1,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 5,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 7,
          buyAmount: "0",
        },

        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 112,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 3,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: 60,
          buyAmount: "0",
        },
        {
          link: "",
          unit: "each",
          name: "Trung Kien",
          price: 0,
          buyAmount: "0",
        },
      ],
      sort: null,
      result: true,
    };
  },
  created() {
    if (this.products.length === 0) {
      this.result = false;
    }
  },
  methods: {
    sortAction() {
      this.sort = true;
      if (this.$refs.select.value == 2) {
        this.products = [...this.products].sort((a, b) => b.price - a.price);
      }
      if (this.$refs.select.value == 1) {
        this.products = [...this.products].sort((a, b) => a.price - b.price);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: rgb(249 250 251);
  padding: 2.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
  }
  .categories {
    min-width: 250px;
    @media (max-width: 1024px) {
      display: none;
    }
    .title {
      font-weight: 550;
      font-size: 1rem;
      line-height: 1.75rem;
      padding-bottom: 0.5rem;
    }
    .list-categories {
      padding: 1rem 1.5rem;
      border-radius: 7px;
      @media (max-width: 1024px) {
        padding: 0 1.5rem;
      }
      background-color: #fff;
    }
  }
  .results {
    flex: 1;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.75rem;
      padding-bottom: 0.5rem;
      font-size: 0.9rem;
      span {
        font-weight: 600;
      }
      .sort {
        position: relative;
        background-color: #fff;
        border-radius: 2px;
        width: 130px;
        cursor: pointer;
        select {
          padding: 0 0.5rem;
          outline: none;
          border: none;
        }
      }
    }
    .body {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      grid-gap: 0.5rem;
    }
    .no-result {
      padding: 1.25rem;
      margin: 1.25rem 0;
      .image {
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        height: auto;
        display: block;
      }
      .title {
        margin-top: 2rem;
        color: #000;
        text-align: center;
        font-size: 1.5rem;
        font-weight: normal;
        font-family: sans-serif;
      }
    }
  }
}
</style>
