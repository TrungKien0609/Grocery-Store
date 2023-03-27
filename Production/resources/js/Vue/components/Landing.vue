<template>
  <div class="landing-container">
    <div class="header">
      <div class="slide">
        <Banner
          v-for="(item, index) in banners"
          :key="index"
          :index="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :keyword="item.key"
          :visibility="visibility"
          :direction="direction"
        />
        <div class="dot">
          <div class="prev" @click="prev">
            <svg-vue icon="left-chevron" class="dark-icon"></svg-vue>
          </div>
          <div class="next" @click="next">
            <svg-vue icon="right-chevron" class="dark-icon"></svg-vue>
          </div>
        </div>
      </div>
      <div class="static-banner">
        <router-link
          :to="{ name: 'Search', query: { category: 'fruits-vegetable' } }"
        >
          <div class="image first">
            <img src="/images/banner/banner-1.jpg" alt="banner1" />
          </div>
        </router-link>
        <router-link
          :to="{ name: 'Search', query: { category: 'organic-food' } }"
        >
          <div class="image">
            <img src="/images/banner/banner-2.jpg" alt="banner1" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="service first">
        <svg-vue icon="truck" class="dark-icon"></svg-vue>
        <div class="text">
          <h3>Free Shipping</h3>
          <p>From $20.00</p>
        </div>
      </div>
      <div class="service second">
        <svg-vue icon="phone-ringing" class="dark-icon"></svg-vue>
        <div class="text">
          <h3>Support 24/7</h3>
          <p>At Anytime</p>
        </div>
      </div>
      <div class="service third">
        <svg-vue icon="wallet" class="dark-icon"></svg-vue>
        <div class="text">
          <h3>Secure Payment</h3>
          <p>Totally Safe</p>
        </div>
      </div>
      <div class="service four">
        <svg-vue icon="giftbox" class="dark-icon"></svg-vue>
        <div class="text">
          <h3>Latest Offer</h3>
          <p>Upto 20% off</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landing",
  components: {
    Banner: () => import("./slide_landing/banner.vue"),
  },
  data() {
    return {
      banners: [
        {
          id: 0,
          image: "images/slide-images/slider-1.jpg",
          title: "The Best Quality Products Guaranteed!",
          description:
            "Dramatically facilitate effective total linkage for go forward processes...",
          key: "breakfast",
        },
        {
          id: 1,
          image: "images/slide-images/slider-2.jpg",
          title: "Best Different Type of Grocery Store",
          description:
            "Quickly aggregate empowered networks after emerging products...",
          key: "fish-meat",
        },
        {
          id: 2,
          image: "images/slide-images/slider-3.jpg",
          title: "Quality Freshness Guaranteed!",
          description:
            "Intrinsicly fashion performance based products rather than accurate benefits...",
          key: "fruits-vegetable",
        },
      ],
      visibility: 0,
      direction: "next",
    };
  },
  computed: {
    bannerLength() {
      return this.banners.length;
    },
  },
  methods: {
    next() {
      if (this.visibility >= this.bannerLength - 1) {
        this.visibility = 0;
      } else this.visibility++;
      this.direction = "next";
    },
    prev() {
      if (this.visibility === 0) {
        this.visibility = this.bannerLength - 1;
      } else this.visibility--;
      this.direction = "prev";
    },
  },
  mounted() {
    setInterval(() => {
      this.next();
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
.landing-container {
  margin: 1.2rem 0;
  .header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      min-height: 300px;
    }
    .slide {
      flex: 1;
      position: relative;
      margin-right: 1.5rem;
      overflow-x: hidden;
      min-height: 16rem;
      @media (max-width: 1024px) {
        margin-right: 0;
      }
      .dot {
        position: absolute;
        bottom: 0;
        @media (max-width: 500px) {
          top: 0.5rem;
        }
        left: 50%;
        margin-bottom: 1rem;
        @media (max-width: 400px) {
          margin-bottom: 0.5rem;
        }
        transform: translate(-50%, 0);
        color: #fff;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        .dark-icon {
          width: 20px;
          height: auto;
          @media (max-width: 400px) {
            width: 16px;
          }
          &:hover {
            ::v-deep path {
              fill: #10b981;
            }
          }
          ::v-deep path {
            fill: #ccc;
          }
        }
        .next,
        .prev {
          margin: 0 1rem;
          padding: 0.5rem;
        }
      }
    }
    .static-banner {
      max-width: 500px;
      @media (max-width: 1024px) {
        display: none;
      }
      .image {
        border-radius: 5px;
        overflow: hidden;
        height: 8rem;
        min-width: 500px;
        &.first {
          margin-bottom: 1rem;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    @media (max-width: 1024px) {
      display: none;
    }
    .service {
      flex: 1 1 24%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem 1.5rem;
      background-color: cyan;
      margin-right: 0.5rem;
      border-radius: 7px;
      .dark-icon {
        margin-right: 1rem;
        width: 24px;
        min-width: 24px;
        max-width: 24px;
        height: auto;
        color: #10b981;
        ::v-deep path {
          fill: none;
        }
      }
      h3 {
        font-family: "poppins", sans-serif;
        font-size: 1rem;
      }
      p {
        font-family: "poppins", sans-serif;
        font-size: 0.85rem;
        color: rgba(75, 85, 99, 1);
      }
    }
    .first {
      background-color: rgb(254 226 226);
    }
    .second {
      background-color: rgb(224 231 255);
    }
    .third {
      background-color: rgb(254 249 195);
    }
    .four {
      background-color: rgb(220 252 231);
      margin-right: 0;
    }
  }
}
</style>
