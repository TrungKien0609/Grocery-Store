<template>
  <div class="container">
    <div class="header" @click="toggleShowDetail">
      <div class="submenu">
        <div class="category-avatar">
          <img
            src="@/assets/images/categories/carp-fish.png"
            alt="category-avatar"
          />
        </div>
        <div class="category-name">{{ category.name }}</div>
      </div>
      <div v-if="!showDetail"><RightArrow class="dark-arrow" /></div>
      <div v-else><DownArrow class="dark-arrow" /></div>
    </div>
    <div class="detail-category" v-if="showDetail">
      <router-link to="#" v-for="(item, index) in category.list" :key="index">
        <p><span>&#x268A;</span> {{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import RightArrow from "../assets/Icons/right-arrow.svg";
import DownArrow from "../assets/Icons/down-arrow.svg";
export default {
  name: "Submenu",
  components: {
    RightArrow,
    DownArrow,
  },
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
    &:hover {
      background-color: #f9fafb;
    }
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
    .dark-arrow {
      path {
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
