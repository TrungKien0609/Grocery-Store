<template>
  <div class="container">
    <div class="header" @click="toggleShowDetail">
      <div class="submenu">
        <div class="category-avatar">
          <img :src="'/storage/' + category.image" alt="category" />
        </div>
        <div class="category-name">{{ category.name }}</div>
      </div>
      <div v-if="!showDetail">
        <svg-vue icon="right-arrow" class="dark-arrow"></svg-vue>
      </div>
      <div v-else>
        <svg-vue icon="down-arrow" class="dark-arrow"></svg-vue>
      </div>
    </div>
    <div class="detail-category" v-if="showDetail">
      <router-link
        :to="{ name: 'Search', query: { subCategory: item.slug } }"
        class="link-dark"
        v-for="(item, index) in category.subCategory"
        :key="index"
      >
        <p><span>&#x268A;</span> {{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Submenu",
  props: ["category"],
  data() {
    return {
      showDetail: null,
    };
  },
  methods: {
    toggleShowDetail() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.25s;
    padding: 7px;
    margin: 0.8rem 0;
    border-radius: 7px;
    cursor: pointer;
    .submenu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .category-avatar {
        width: 18px;
      }
      .category-name {
        margin-left: 10px;
        font-size: 15px;
        font-weight: 550;
        color: #000;
      }
    }
    &:hover {
      background-color: #f9fafb;
      .category-name {
        color: #10b981;
      }
    }
    .dark-arrow {
      ::v-deep path {
        fill: #ccc;
      }
    }
  }
  .detail-category {
    font-weight: 550;
    margin: 0.5rem 0;
    width: 100%;
    p {
      margin-left: 2rem;
      transition: 0.25s;
      cursor: pointer;
      font-size: 0.9rem;
      &:hover {
        color: #10b981;
      }
      span {
        color: #ccc;
      }
    }
  }
}
</style>
