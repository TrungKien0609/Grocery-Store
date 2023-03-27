<template>
  <div class="container">
    <div class="landing-page">
      <Landing />
    </div>
    <div class="categories-banner">
      <h2 class="section-name">Featured Categories</h2>
      <p class="text">
        Choose your necessary products from this feature categories.
      </p>
      <CategoriesBanner />
    </div>
    <div class="show-products">
      <h2 class="section-name">New Products for Daily Shopping</h2>
      <p class="text">
        See all our new products in this week. You can choose your daily needs
        products from this list and get some special offer with free shipping.
      </p>
      <ListProduct />
    </div>
    <div class="card-intro">
      <CartIntro v-for="(item, index) in banners" :key="index" :item="item" />
    </div>
    <div class="products-discount">
      <h2 class="section-name">Latest Discounted Products</h2>
      <p class="text">
        See Our latest discounted products below. Choose your daily needs from
        here and get a special discount with free shipping.
      </p>
      <ProductsDiscount />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Landing: () => import("../components/Landing.vue"),
    CategoriesBanner: () => import("../components/CategoriesBanner.vue"),
    ListProduct: () => import("../components/ListProduct.vue"),
    CartIntro: () => import("../components/CardIntro.vue"),
    ProductsDiscount: () => import("../components/ProductsDiscount.vue"),
  },
  data() {
    return {
      banners: [
        {
          name: "Fresh & Natural",
          image: "/images/banner/role1.jpg",
          key: "fresh-vegetable",
        },
        {
          name: "Fish & Meat",
          image: "/images/banner/role2.jpg",
          key: "fish-meat",
        },
        {
          name: "Bread & Bakery",
          image: "/images/banner/role3.jpg",
          key: "biscuits--cakes",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  .section-name,
  .text {
    width: 60%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 90%;
    }
  }
  .section-name {
    font-family: sans-serif;
    text-align: center;
    line-height: 2.5rem;
  }
  .text {
    text-align: center;
    line-height: 1.5rem;
    color: rgba(75, 85, 99, 1);
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
  .landing-page {
    width: 100%;
    padding: 0 2.5rem;
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }
  .categories-banner {
    width: 100%;
    margin: 6rem 0;
    @media (max-width: 1024px) {
      margin: 2rem 0;
    }
    padding: 0 2.5rem;
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }
  .show-products {
    background-color: rgb(249 250 251);
    padding: 4.5rem 2.5rem;
    @media (max-width: 1024px) {
      padding: 2.5rem 2.5rem;
    }
    @media (max-width: 600px) {
      padding: 2.5rem 1rem;
    }
  }
  .card-intro {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 0 2.5rem;
    background-color: rgb(249 250 251);
    @media (max-width: 1024px) {
      padding: 0 2.5rem;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }
  .products-discount {
    width: 100%;
    padding: 4rem 2.5rem;
    background-color: rgb(249 250 251);
    @media (max-width: 1024px) {
      padding: 2.5rem;
    }
    @media (max-width: 600px) {
      padding: 2.5rem 1rem;
    }
  }
}
</style>
