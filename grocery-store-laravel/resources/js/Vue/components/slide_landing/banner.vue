<template>
  <transition :name="direction">
    <div class="banner" v-show="visibility === index">
      <div class="image">
        <img :src="image" alt="banner" />
      </div>
      <div class="title">{{ title }}</div>
      <p class="description">
        {{ description }}
      </p>
      <router-link :to="{ name: 'Search', query: { category: keyword } }">
        <button class="">Shop Now</button>
      </router-link>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Banner",
  props: [
    "image",
    "title",
    "description",
    "keyword",
    "visibility",
    "index",
    "direction",
  ],
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  padding: 1rem 2.5rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .title {
    width: 66%;
    text-align: left;
    font-size: 1.875rem;
    font-weight: 600;
    font-family: sans-serif;
    line-height: 2rem;
    @media (max-width: 1024px) {
      font-size: 1.7rem;
      width: 80%;
    }
    @media (max-width: 640px) {
      font-size: 1.5rem;
      width: 100%;
    }
  }
  .description {
    width: 66%;
    @media (max-width: 640px) {
      width: 100%;
    }
    color: rgba(75, 85, 99, 1);
    line-height: 1.5rem;
    margin: 0.7rem 0;
  }
  button {
    background-color: #10b981;
    padding: 0.7rem 1.5rem;
    border-radius: 7px;
    color: #fff;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: rgba(5, 150, 105, 1);
    }
  }
}
.prev-enter-active,
.prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.prev-enter {
  transform: translateX(-100%);
}
.prev-leave-to {
  transform: translateX(100%);
}
.next-enter-active,
.next-leave-active {
  transition: all 0.5s ease-in-out;
}
.next-enter {
  transform: translateX(100%);
}
.next-leave-to {
  transform: translateX(-100%);
}
</style>
