<template>
  <div class="offer-container">
    <div class="header">
      <div class="image">
        <img src="/images/banner/page-header-bg.jpg" alt="page-header" />
      </div>
      <h1 class="page-header">Mega Offer</h1>
    </div>
    <div class="content">
      <CouponOffer
        v-for="(item, index) in offers"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "aaaaaa",
  components: {
    CouponOffer: () => import("../components/CouponOffer.vue"),
  },
  computed:{
    ...mapState(['offers'])
  }
};
</script>
<style lang="scss" scoped>
.offer-container {
  .header {
    position: relative;
    width: 100%;
    background-color: #fff;
    max-height: 200px;
    overflow: hidden;
    .image {
      width: 100%;
    }
    .page-header {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: sans-serif;
      font-size: 2.25rem;
      @media (max-width: 1024px) {
        font-size: 1.875rem;
      }
      @media (max-width: 760px) {
        font-size: 1.25rem;
      }
    }
  }
  .content {
    padding: 3rem 2.5rem;
    background-color: rgba(249, 250, 251, 1);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
    }
    @media (max-width: 600px) {
      padding: 2rem 1rem;
      grid-gap: 0;
    }
  }
}
</style>
