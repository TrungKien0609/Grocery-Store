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
          :link="item.link"
          :visibility="visibility"
          :direction="direction"
        />
        <div class="dot">
          <div class="prev" @click="prev"><LeftArrow class="dark-icon" /></div>
          <div class="next" @click="next"><RightArrow class="dark-icon" /></div>
        </div>
      </div>
      <div class="static-banner">
        <router-link to="#">
          <div class="image first">
            <img src="@/assets/images/banner/banner-1.jpg" alt="banner1" />
          </div>
        </router-link>
        <router-link to="#">
          <div class="image">
            <img src="@/assets/images/banner/banner-2.jpg" alt="banner2" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="service first">
        <Truck class="dark-icon" />
        <div class="text">
          <h3>Free Shipping</h3>
          <p>From $20.00</p>
        </div>
      </div>
      <div class="service second">
        <Phone class="dark-icon" />
        <div class="text">
          <h3>Support 24/7</h3>
          <p>At Anytime</p>
        </div>
      </div>
      <div class="service third">
        <Wallet class="dark-icon" />
        <div class="text">
          <h3>Secure Payment</h3>
          <p>Totally Safe</p>
        </div>
      </div>
      <div class="service four">
        <Offer class="dark-icon" />
        <div class="text">
          <h3>Latest Offer</h3>
          <p>Upto 20% off</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "./slide_landing/banner.vue";
import Truck from "../assets/Icons/truck.svg";
import Phone from "../assets/Icons/phone-ringing.svg";
import Wallet from "../assets/Icons/wallet.svg";
import Offer from "../assets/Icons/giftbox.svg";
import RightArrow from "../assets/Icons/right-chevron.svg";
import LeftArrow from "../assets/Icons/left-chevron.svg";
export default {
  name: "Landing",
  components: {
    Banner,
    Phone,
    Truck,
    Wallet,
    Offer,
    RightArrow,
    LeftArrow,
  },
  data() {
    return {
      banners: [
        {
          id: 0,
          image: require("@/assets/images/slide-images/slider-1.jpg"),
          title: "The Best Quality Products Guaranteed!",
          description:
            "Dramatically facilitate effective total linkage for go forward processes...",
          link: "#",
        },
        {
          id: 1,
          image: require("@/assets/images/slide-images/slider-2.jpg"),
          title: "Best Different Type of Grocery Store",
          description:
            "Quickly aggregate empowered networks after emerging products...",
          link: "#",
        },
        {
          id: 2,
          image: require("@/assets/images/slide-images/slider-3.jpg"),
          title: "Quality Freshness Guaranteed!",
          description:
            "Intrinsicly fashion performance based products rather than accurate benefits...",
          link: "#",
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
            path {
              fill: #10b981;
            }
          }
          path {
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
        width: 25px;
        height: auto;
        path {
          fill: rgba(220, 38, 38, 1);
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
      .dark-icon {
        transform: rotate(90deg);
      }
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
