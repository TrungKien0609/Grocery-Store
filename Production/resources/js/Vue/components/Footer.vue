<template>
  <div class="footer-container">
    <div class="remind-user">
      <div class="content">
        <h1>Get Your Daily Needs From Our Neik Store</h1>
        <p>
          There are many products you will find our shop, Choose your daily
          necessary product from our Neik shop and get some special offer
        </p>
        <div class="app-dowload">
          <a href="https://www.apple.com/app-store/" target="blank">
            <img src="/images/app-store.svg" alt="app-store" class="app-link" />
          </a>
          <a href="https://play.google.com/store/apps" target="blank">
            <img src="/images/play-store.svg" alt="play-store" class="app-link" />
          </a>
        </div>
      </div>
      <div class="image">
        <img src="/images/common-fruit.png" alt="" />
      </div>
    </div>
    <div class="footer-info">
      <div class="col-1">
        <div class="image header">
          <router-link to="#">
            <img src="/images/dark-logo.png" alt="logo" />
          </router-link>
        </div>
        <p>
          There are many popular products you will find our shop, Choose your
          daily necessary product from our Neik shop and get some special offer.
        </p>
        <p>Follow Us</p>
        <div class="follow">
          <a href="#" target="blank" class="follow-link">
            <svg-vue icon="facebook"></svg-vue>
          </a>
          <a href="#" target="blank" class="follow-link">
            <svg-vue icon="twitter"></svg-vue>
          </a>
          <a href="#" target="blank" class="follow-link">
            <svg-vue icon="youtube"></svg-vue>
          </a>
          <a href="#" target="blank" class="follow-link">
            <svg-vue icon="linkedin"></svg-vue>
          </a>
        </div>
      </div>
      <div class="col-2">
        <h3 class="header">Company</h3>
        <router-link to="#" class="link-dark">
          <p>About Us</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Contact us</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Careers</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Latest News</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Latest Discount</p>
        </router-link>
      </div>
      <div class="col-3">
        <h3 class="header">Top Category</h3>
        <router-link to="#" class="link-dark">
          <p>Fish & Meat</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Soft Drinks</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Baby Care</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Beauty & Health</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Fruits & Vegetable</p>
        </router-link>
      </div>
      <div class="col-4">
        <h3 class="header">My Account</h3>
        <router-link to="#" class="link-dark">
          <p>Dashboard</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>My Orders</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Recent Orders</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Updated Profile</p>
        </router-link>
        <router-link to="#" class="link-dark">
          <p>Change Password</p>
        </router-link>
      </div>
    </div>
    <div class="copy-right">
      <p>Copyright 2022 <a href="#">@Trung Kien</a>, All rights reserved.</p>
      <div class="payment-logo">
        <img src="/images/payment-logo.png" alt="payment-logo" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer-container {
  .remind-user {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    background-color: rgb(238 242 255);
    @media (max-width: 900px) {
      padding: 1.5rem 2.5rem;
    }
    @media (max-width: 770px) {
      padding: 2.5rem;
    }
    @media (max-width: 600px) {
      padding: 2.5rem 1rem;
    }
    .content {
      max-width: 500px;
      @media (max-width: 770px) {
        max-width: initial;
      }
      h1 {
        font-family: sans-serif;
        margin-bottom: 0.5rem;
        font-weight: bolder;
        @media (max-width: 1024px) {
          font-size: 1.8rem;
          width: 80%;
        }
        @media (max-width: 800px) {
          font-size: 1.7rem;
          width: 80%;
        }
        @media (max-width: 600px) {
          font-size: 1.6rem;
          width: 80%;
        }
        @media (max-width: 400px) {
          font-size: 1.5rem;
          width: 80%;
        }
      }
      p {
        line-height: 1.7rem;
      }
      .app-dowload {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
        .app-link {
          margin: 0 1rem 0 0;
          object-fit: cover;
          max-width: 170px;
        }
      }
    }
    .image {
      width: 100%;
      max-width: 470px;
      min-width: 330px;
      @media (max-width: 770px) {
        display: none;
      }
    }
  }
  .footer-info {
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
    padding: 0 2.5rem;
    @media (max-width: 600px) {
      padding: 2.5rem 1rem;
      margin: 0;
    }
    flex-wrap: wrap;
    .header {
      font-family: "Open Sans", sans-serif;
      font-weight: 550;
      color: #000;
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }
    > div {
      margin-right: 7rem;
      @media (max-width: 490px) {
        margin-right: 1rem;
      }
      color: rgba(75, 85, 99, 1);
      .link-dark {
        transition: 0.25s;
        position: initial;
        &:hover {
          color: #10b981;
        }
      }
      p {
        line-height: 1.6rem;
        font-size: 0.87rem;
      }
    }
    .col-1 {
      flex: 1;
      margin: 0;
      margin-right: 2rem;
      min-width: 250px;
      .image {
        width: 110px;
        height: 40px;
      }
      .follow {
        display: flex;
        justify-items: flex-start;
        margin-bottom: 2.5rem;
        .follow-link {
          cursor: pointer;
          width: 30px;
          height: auto;
          margin-right: 0.8rem;
        }
      }
      p {
        font-size: 0.96rem;
        color: rgba(75, 85, 99, 1);
        margin-bottom: 2rem;
        line-height: 1.6rem;
        &:last-of-type {
          margin-bottom: 1rem;
          color: #000;
          font-size: 1rem;
        }
      }
    }
  }
  .copy-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
    border-top: 1px solid #eee;
    @media (max-width: 800px) {
      justify-content: center;
    }
    @media (max-width: 600px) {
      padding: 1rem;
      margin: 0;
    }
    p {
      color: rgba(75, 85, 99, 1);
      font-size: 0.8rem;
      a {
        color: #10b981;
      }
    }
    .payment-logo {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
}
</style>
