<template>
  <div class="page-not-found-container">
    <NotFound class="image" viewBox="250 0 650 650" />
    <h1 class="title">Page is not found!</h1>
    <p>Sorry! This page is not found! Please try again later.</p>
    <router-link :to="{ name: 'Home' }" class="link">
      <button>Back to Home</button>
    </router-link>
  </div>
</template>
<script>
import NotFound from "@/assets/Icons/404.svg";
export default {
  name: "404",
  components: {
    NotFound,
  },
};
</script>
<style lang="scss" scoped>
.page-not-found-container {
  flex: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 2rem;
  background-color: rgba(236, 253, 245, 1);
  .image {
    width: 100%;
    height: auto;
    max-height: 370px;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .title {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }
  p {
    margin: 1rem 0;
    color: rgba(75, 85, 99, 1);
    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
  .link {
    @media (max-width: 640px) {
      width: 100%;
    }
    button {
      display: block;
      margin-top: 1rem;
      width: 100%;
      background-color: #10b981;
      padding: 0.7rem 2rem;
      color: #fff;
      border-radius: 5px;
      font-size: 1.125rem;
      font-family: sans-serif;
      font-weight: 700;
      cursor: pointer;
      @media (max-width: 1024px) {
        font-size: 0.95rem;
      }
      @media (max-width: 640px) {
        font-size: 0.95rem;
      }
    }
  }
}
</style>
