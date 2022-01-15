<template>
  <div class="list-categories-container">
    <Category
      v-for="(category, index) in ListCategories"
      :key="index"
      :category="category"
    />
  </div>
</template>
<script>
import Category from "./Category.vue";
export default {
  name: "ListCategories",
  components: {
    Category,
  },
  data() {
    return {
      ListCategories: [
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
    };
  },
};
</script>
<style lang="scss" scoped>
.list-categories-container {
  position: absolute;
  width: 100%;
  height: 100%;
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
