<template>
  <div class="list-categories-container">
    <Category
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
      @toggleCategories="toggleCategories"
      @toggleSideBar="toggleSideBar"
    />
  </div>
</template>
<script>
import Category from "./Category.vue";
import { mapState } from "vuex";
export default {
  name: "ListCategories",
  components: {
    Category,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    toggleCategories() {
      this.$emit("toggleCategories");
    },
    toggleSideBar() {
      this.$emit("toggleSideBar");
    },
  },
};
</script>
<style lang="scss" scoped>
.list-categories-container {
  padding: 1rem 1.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  background-color: #fff;
}
</style>
