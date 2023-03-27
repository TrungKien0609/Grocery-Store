<template>
  <div class="categories-banner-container">
    <div v-for="(item, index) in categories" :key="index">
      <router-link :to="{ name: 'Search', query: { category: item.slug } }">
        <div class="category">
          <div class="image">
            <img :src="item.image" alt="Category" />
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CategoriesBanner",
  data() {
    return {};
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>
<style lang="scss" scoped>
.categories-banner-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-gap: 0.5rem;
  margin-top: 2.5rem;
  .category {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 7px;
    padding: 1rem 0;
    transition: 0.25s;
    &:hover {
      transform: scale(1.05);
    }
    .image {
      width: 35px;
      margin: 0 1rem;
    }
    .name {
      font-size: 0.9rem;
      color: rgba(75, 85, 99, 1);
    }
  }
}
</style>
