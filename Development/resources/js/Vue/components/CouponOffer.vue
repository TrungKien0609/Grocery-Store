<template>
  <div class="coupon-offer-container">
    <div class="left">
      <div class="image">
        <img :src="item.image" alt="Offer" />
      </div>
      <div class="info">
        <div class="time-for-expired">
          <TimeExpired :date="item.date" :active="active" />
        </div>
        <p class="name">{{ item.name }}</p>
        <p class="number-off">
          <span>{{ item.discount }}%</span> Off
        </p>
      </div>
    </div>
    <div class="right">
      <p class="status">
        Coupon <span v-show="!active">Inactive</span>
        <span class="active" v-show="active">Active</span>
      </p>
      <div class="copy-area">
        <p v-show="!copy" @click="copyAction" v-clipboard:copy="item.code">
          {{ item.code }}
        </p>
        <p v-show="copy">Copied</p>
      </div>
      <p class="note">
        * This coupon code apply when you shopping more then ${{item.rule}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CouponOffer",
  components: {
    TimeExpired: () => import("../components/TimeExpired.vue"),
  },
  props: ["item"],
  data() {
    return {
      copy: false,
      active: true,
    };
  },
  created() {
    if (Date.parse(this.item.date) / 1000 < new Date().getTime() / 1000) {
      this.active = false;
    }
  },
  updated() {
    if (Date.parse(this.item.date) / 1000 < new Date().getTime() / 1000) {
      this.active = false;
    }
  },
  methods: {
    copyAction() {
      this.copy = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.coupon-offer-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  background-color: #fff;
  border-radius: 7px;
  padding: 2rem 1.5rem;
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  }
  .image {
    width: 120px;
    height: 120px;
    max-width: 120px;
    @media (max-width: 600px) {
      max-height: 80px;
      min-width: 80px;
    }
  }
  .left {
    display: flex;
    justify-content: flex-start;
    grid-column-start: 1;
    grid-column-end: 3;
    .info {
      padding-left: 1rem;
      width: 100%;
      .name {
        font-size: 1.05rem;
        color: #333;
        font-family: sans-serif;
        margin: 0.5rem 0;
      }
      .number-off {
        font-size: 1.35rem;
        font-weight: 800;
        color: #4b5563;
        span {
          font-family: sans-serif;
          color: rgba(239, 68, 68, 1);
        }
      }
    }
  }
  .right {
    .status {
      color: #000;
      span {
        color: rgba(239, 68, 68, 1);
      }
      .active {
        color: rgba(5, 150, 105, 1);
      }
      @media (max-width: 760px) {
        margin-top: 1rem;
      }
    }
    .copy-area {
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 50px;
      text-transform: uppercase;
      color: rgba(5, 150, 105, 1);
      font-family: sans-serif;
      font-weight: 800;
      border: 1px dashed #10b981;
      border-radius: 7px;
      margin: 0.5rem 0;
      background-color: rgba(236, 253, 245, 1);
      text-align: center;
      p {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 50px;
      }
    }
    .note {
      font-size: 0.78rem;
      color: rgba(107, 114, 128, 1);
      @media (max-width: 760px) {
        width: 100%;
      }
    }
  }
}
</style>
