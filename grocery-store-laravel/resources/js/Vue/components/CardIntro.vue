<template>
  <div class="card-intro-container">
    <div class="image">
      <img src="images/banner/role1.jpg" alt="card-intro" />
    </div>
    <div class="card-intro-content">
      <p class="taste">Taste of</p>
      <h3 class="title">Fresh & Natural</h3>
      <p class="discount">Weekend discount offer</p>
      <router-link to="#">
        <button class="btn">Shop Now</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "cartIntro",
};
</script>
<style lang="scss" scoped>
.card-intro-container {
  width: 100%;
  position: relative;
  border-radius: 10px;
  transition: 0.25s;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  overflow: hidden;
  cursor: pointer;
  .image {
    width: 100%;
  }
  .card-intro-content {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    margin: 1rem 2.5rem;
    .taste {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: #000;
      line-height: 1.5rem;
    }
    .title {
      font-family: sans-serif;
      font-size: 1.5rem;
      color: rgb(21 128 61);
      font-weight: bold;
      line-height: 2.5rem;
    }
    .discount {
      font-size: 0.85rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      background-color: #fff;
      font-size: 0.75rem;
      font-family: sans-serif;
      margin-top: 2rem;
      border-radius: 7px;
      transition: 0.25s;
      cursor: pointer;
      &:hover {
        background-color: rgb(21 128 61);
        color: #fff;
      }
    }
  }
}
</style>
