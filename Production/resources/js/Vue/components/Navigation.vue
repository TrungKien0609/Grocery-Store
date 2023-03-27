<template>
  <div class="wrapper">
    <div class="mobile" v-show="mobile">
      <div class="nav-bar">
        <div class="bar-btn signal-icon" @click="toggleSideBar">
          <svg-vue icon="bars" class="light-icon"></svg-vue>
        </div>
        <div class="home signal-icon">
          <router-link :to="{ name: 'Home' }">
            <svg-vue icon="home" class="light-icon"></svg-vue>
          </router-link>
        </div>
        <div class="notification signal-icon">
          <svg-vue icon="notification" class="light-icon"></svg-vue>
          <div class="sub-info">1</div>
        </div>
        <div class="cart signal-icon" @click="toggleCart">
          <svg-vue icon="cart" class="light-icon"></svg-vue>
          <div class="sub-info">{{ totalItems }}</div>
        </div>
        <div class="account signal-icon">
          <div v-if="!isLogin" @click="toggleAccount">
            <svg-vue icon="user" class="light-icon"></svg-vue>
          </div>
          <div class="hasLogin" v-if="isLogin">
            <router-link :to="{ name: 'UserDashBoard' }">
              <div class="image">
                <img :src="userAvatar" alt="user" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="search-mobile">
        <div class="search">
          <form>
            <input
              type="text"
              placeholder="Search for products ( e.g. fish, oil )"
              v-model="searchText"
            />
            <button @click.prevent="submitSearch">
              <svg-vue icon="search" class="dark-icon"></svg-vue>
            </button>
          </form>
        </div>
      </div>
      <div class="side-bar">
        <div class="drawer" v-show="mobileSideBar" @click="toggleSideBar"></div>
        <transition name="side-bar">
          <div class="content" v-show="mobileSideBar">
            <div class="header">
              <div class="branding" @click="toggleSideBar">
                <router-link class="logo" :to="{ name: 'Home' }"
                  ><img src="/images/light-logo.png" alt="logo"
                /></router-link>
              </div>
              <div class="close-side-bar-btn" @click="toggleSideBar">
                <svg-vue icon="times" class="dark-icon"></svg-vue>
              </div>
            </div>
            <div class="body">
              <ul>
                <div @click="toggleSideBar">
                  <router-link class="link-dark" :to="{ name: 'Home' }">
                    <span
                      ><svg-vue icon="home" class="dark-icon"></svg-vue
                      >Home</span
                    >
                  </router-link>
                </div>
                <div class="link-dark categories">
                  <div @click="toggleCategories">
                    <span
                      ><svg-vue icon="categories" class="dark-icon"></svg-vue>
                      Categories
                      <svg-vue
                        icon="right-arrow"
                        class="dark-arrow"
                        v-if="!showCategories"
                      ></svg-vue>
                      <svg-vue
                        icon="down-arrow"
                        class="dark-arrow"
                        v-else
                      ></svg-vue>
                    </span>
                  </div>
                  <div class="sub-menu" v-show="showCategories">
                    <ListCategories @toggleSideBar="toggleSideBar" />
                  </div>
                </div>
                <div @click="toggleSideBar">
                  <router-link class="link-dark" :to="{ name: 'AboutUs' }">
                    <span
                      ><svg-vue icon="users" class="dark-icon"></svg-vue>About
                      us</span
                    >
                  </router-link>
                </div>
                <div @click="toggleSideBar">
                  <router-link class="link-dark" :to="{ name: 'ContactUs' }">
                    <span
                      ><svg-vue icon="phone-go" class="dark-icon"></svg-vue>
                      Contact Us</span
                    >
                  </router-link>
                </div>
                <div @click="toggleSideBar">
                  <router-link class="link-dark offer" :to="{ name: 'Offer' }">
                    <span
                      ><svg-vue icon="giftbox" class="dark-icon"></svg-vue
                      >Offers</span
                    >
                  </router-link>
                </div>
                <div @click="toggleSideBar">
                  <router-link
                    class="link-dark"
                    :to="{ name: 'PrivacyPolicy' }"
                  >
                    <span
                      ><svg-vue icon="guard" class="dark-icon"></svg-vue>Privacy
                      Policy</span
                    >
                  </router-link>
                </div>
                <div @click="toggleSideBar">
                  <router-link
                    class="link-dark"
                    :to="{ name: 'TermCondition' }"
                  >
                    <span
                      ><svg-vue icon="terms" class="dark-icon"></svg-vue>Terms &
                      Conditions</span
                    >
                  </router-link>
                </div>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="header" v-if="!mobile">
      <div class="branding">
        <router-link class="logo" :to="{ name: 'Home' }"
          ><img src="/images/light-logo.png" alt="logo"
        /></router-link>
      </div>
      <div class="search">
        <form>
          <input
            type="text"
            placeholder="Search for products ( e.g. fish, oil )"
            v-model="searchText"
          />
          <button @click.prevent="submitSearch">
            <svg-vue icon="search" class="dark-icon"></svg-vue>
          </button>
        </form>
      </div>
      <div class="user-feature">
        <div class="notification signal-icon">
          <svg-vue icon="notification" class="light-icon"></svg-vue>
          <div class="sub-info">1</div>
        </div>
        <div class="cart signal-icon" @click="toggleCart">
          <svg-vue icon="cart" class="light-icon"></svg-vue>
          <div class="sub-info">{{ totalItems }}</div>
        </div>
        <div class="account signal-icon">
          <div v-if="!isLogin" @click="toggleAccount">
            <svg-vue icon="user" class="light-icon"></svg-vue>
          </div>
          <div class="hasLogin" v-if="isLogin">
            <router-link :to="{ name: 'UserDashBoard' }">
              <div class="image">
                <img :src="userAvatar" alt="user" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="!mobile">
      <div class="nav-links">
        <ul>
          <router-link class="link-dark" :to="{ name: 'Home' }">
            <span>Home</span>
          </router-link>
          <div class="link-dark categories" ref="dekstopCategories">
            <div @click="toggleCategories">
              Categories
              <svg-vue icon="down-arrow" class="dark-arrow"></svg-vue>
            </div>
            <div class="sub-menu" v-show="showCategories">
              <!-- <LoadingEffect /> -->
              <ListCategories @toggleCategories="toggleCategories" />
            </div>
          </div>
          <router-link class="link-dark" :to="{ name: 'AboutUs' }"
            ><span>About us</span></router-link
          >
          <router-link class="link-dark" :to="{ name: 'ContactUs' }">
            <span>Contact Us</span></router-link
          >
          <router-link class="link-dark offer" :to="{ name: 'Offer' }">
            <span>Offers</span>
          </router-link>
        </ul>
      </div>
      <div class="more-info">
        <router-link class="link-dark" :to="{ name: 'PrivacyPolicy' }"
          >Privacy Policy
        </router-link>
        <router-link class="link-dark" :to="{ name: 'TermCondition' }"
          >Terms & Conditions
        </router-link>
      </div>
    </div>
    <div class="cart">
      <div class="drawer" v-show="showCart" @click="toggleCart"></div>
      <transition name="cart">
        <CartCheckOut
          @toggleCart="toggleCart"
          v-show="showCart"
          @toggleAccount="toggleAccount"
        />
      </transition>
    </div>
    <div class="summary-cart" v-if="!mobile">
      <SummaryCart @toggleCart="toggleCart" />
    </div>
  </div>
</template>
<script>
// import LoadingEffect from "./LoadingEffect.vue";
import { mapState, mapActions } from "vuex";
import router from "../router/index.js";
export default {
  name: "Navigation",
  components: {
    ListCategories: () => import("./ListCategories.vue"),
    CartCheckOut: () => import("./Cart.vue"),
    SummaryCart: () => import("./SummaryCart.vue"),
    // LoadingEffect,
  },
  data() {
    return {
      showCategories: null,
      mobile: null,
      mobileSideBar: null,
      showCart: null,
      searchText: "",
    };
  },
  created() {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".categories") &&
        this.$refs.dekstopCategories !== undefined
      ) {
        this.showCategories = false;
      }
    });
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
  },
  methods: {
    toggleCategories() {
      this.showCategories = !this.showCategories;
    },
    toggleSideBar() {
      this.mobileSideBar = !this.mobileSideBar;
      this.$emit("toggleBlurBody");
    },
    checkScreenSize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1024) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.showCategories = false;
      this.mobileSideBar = false;
      this.showCart = false;
      // reset all after responsive
      return;
    },
    toggleCart() {
      this.showCart = !this.showCart;
      this.$emit("toggleBlurBody");
    },
    toggleAccount() {
      this.$emit("toggleAccount");
    },
    submitSearch() {
      router.push({ name: "Search", query: { product: this.searchText } });
    },
    ...mapActions(["search"]),
  },
  computed: {
    ...mapState(["totalItems", "isLogin", "userAvatar"]),
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  z-index: 20;
  .offer {
    color: #ef4444;
    border-radius: 5px;
    background-color: rgba(239, 68, 68, 0.1);
    &::before {
      content: "";
      position: absolute;
      right: -5px;
      top: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ef4444;
      border: 3px solid rgba(255, 255, 255, 0.5);
      animation: live 1.4s infinite ease-in-out 0.42s;
    }
  }
  .search {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      padding: 1rem;
    }
    form {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      border-radius: 7px;
      overflow: hidden;
      padding: 10px 20px;
      margin-left: 2rem;
      @media (max-width: 1024px) {
        margin: 0;
      }
      input {
        width: 100%;
        font-family: sans-serif;
        font-size: 0.9rem;
        color: #4b5563;
        &::placeholder {
          color: #ccc;
        }
      }
      button {
        cursor: pointer;
        margin-bottom: -3px;
        background-color: transparent;
      }
    }
  }
  .image {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }
  .header,
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #10b981;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    @media (max-width: 600px) {
      padding: 0.9rem 1rem;
    }
    width: 100%;
    .branding {
      width: 125px;
      min-width: 100px;
      margin-left: -7px;
    }
    .user-feature {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .search-mobile {
    width: 100%;
    background-color: #10b981;
    border-top: 5px solid #fff;
    padding: 0 2.5rem;
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
    .search {
      max-width: none;
      padding: 1rem 0;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    background-color: #fff;
    .nav-links {
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .link-dark {
          padding: 0.3rem 0;
          margin-right: 2.5rem;
          transition: 0.25s;
          position: relative;
          cursor: pointer;
          &.offer {
            padding: 0.3rem 0.6rem;
          }
          .sub-menu {
            position: absolute;
            bottom: -460px;
            left: 0;
            z-index: 10;
            height: 450px;
            width: 320px;
            background-color: #fff;
            border-radius: 7px;
            box-shadow: 0 2px 12px -1px rgba(0, 0, 0, 0.1),
              0 2px 12px -1px rgba(0, 0, 0, 0.2);
            overflow-y: auto;
            &::-webkit-scrollbar {
              display: none;
            }
          }
          .dark-arrow {
            margin-left: 3px;
          }
          span {
            &:hover {
              color: #10b981;
              .dark-arrow {
                ::v-deep path {
                  fill: #10b981;
                }
              }
            }
          }
        }
      }
    }
    .more-info {
      display: flex;
      justify-content: flex-start;
      .link-dark {
        padding: 0.2rem;
        margin-left: 3rem;
        transition: 0.25s;
        &:hover {
          color: #10b981;
        }
      }
    }
  }
  .signal-icon {
    margin: 0 1rem;
    cursor: pointer;
    padding: 0.5rem;
    position: relative;
    @media (max-width: 1024px) {
      margin-right: 1rem;
      margin-left: 0;
      padding: 0.5rem 0;
    }
    &:last-child {
      margin-right: 0;
      @media (max-width: 1024px) {
        margin-right: 1rem;
      }
    }
    .sub-info {
      position: absolute;
      right: -3px;
      top: 0;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      height: 20px;
      width: 20px;
      color: #fff;
      background-color: #ef4444;
      border-radius: 15px;
      border-radius: 50%;
    }
  }
  .side-bar {
    .content {
      position: fixed;
      top: 0;
      z-index: 999;
      left: 0;
      width: 100%;
      height: 100vh;
      max-width: 420px;
      display: flex;
      flex-direction: column;
      @media (max-width: 480px) {
        max-width: 480px;
      }
      background-color: #fff;
      .header {
        padding: 0.5rem 1.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .branding {
          width: 60px;
        }
        .close-side-bar-btn {
          height: 32px;
          width: 32px;
          cursor: pointer;
          border-radius: 50%;
          background-color: rgb(249 250 251);
          display: flex;
          justify-content: center;
          align-items: center;
          .dark-icon {
            display: block;
            margin-left: -2px;
            ::v-deep path {
              fill: rgba(255, 0, 0, 0.8);
            }
          }
        }
      }
      .body {
        flex: 1;
        overflow-y: auto;
        &::-webkit-scrollbar {
          display: none;
        }
        ul {
          display: flex;
          flex-direction: column;
          .sub-menu {
            border-top: 1px solid #ccc;
          }
          .link-dark {
            span {
              display: block;
              font-size: 1rem;
              font-weight: bold;
              font-family: sans-serif;
              width: 100%;
              height: 60px;
              line-height: 60px;
              padding: 0 2rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              cursor: pointer;
              transition: 0.25s;
              &:hover {
                color: #10b981;
                .dark-icon,
                .dark-arrow {
                  ::v-deep path {
                    fill: #10b981;
                  }
                }
              }
              .dark-icon {
                width: 1rem;
                height: auto;
                margin-right: 0.5rem;
                margin-bottom: 6px;
                ::v-deep path {
                  fill: #4b5563;
                }
              }
              .dark-arrow {
                margin-left: 5px;
              }
            }
            &.offer {
              .dark-icon {
                color: #ef4444;
                ::v-deep path {
                  fill: none;
                }
              }
              &:hover {
                .dark-icon {
                  color: #10b981;
                  ::v-deep path {
                    fill: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .summary-cart {
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 50;
  }
}
@keyframes live {
  0%,
  80%,
  100% {
    transform: scale(0.6);
  }
  40% {
    transform: scale(1);
  }
}
.cart-enter-active,
.cart-leave-active {
  transition: transform 0.5s ease-out;
}
.cart-enter,
.cart-leave-to {
  transform: translateX(100%);
}

.side-bar-enter-active,
.side-bar-leave-active {
  transition: transform 0.5s ease-out;
}
.side-bar-enter,
.side-bar-leave-to {
  transform: translateX(-100%);
}
</style>
