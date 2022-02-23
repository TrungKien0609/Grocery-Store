<template>
  <div class="product-container">
    <p class="link">
      <span>Home </span>
      <svg-vue icon="right-chevron" class="dark-icon"></svg-vue>
      <span>Fresh Vegetable Organic</span>
      <svg-vue icon="right-chevron" class="dark-icon"></svg-vue>
      Purple Cauliflower
    </p>
    <div class="content">
      <div class="product-info">
        <div class="image">
          <img src="/images/products/Green-Leaf.jpg" alt="image" />
          <div class="discount-info">17% Off</div>
        </div>
        <div class="text-info">
          <h3 class="title">Organic Broccoli</h3>
          <div class="ratting">
            <star-rating
              :rating="3.5"
              :read-only="true"
              :increment="0.01"
              :star-size="15"
              :show-rating="false"
            />
            <a href="#scroll-to-replies">( watch 4 reviews )</a>
          </div>
          <div class="price">$12 <span>$10</span></div>
          <div class="stock">In Stock</div>
          <div class="description">
            Most fresh vegetables are low in calories and have a water content
            in excess of 70 percent, with only about 3.5 percent protein and
            less than 1 percent fat. ... The root vegetables include beets,
            carrots, radishes, sweet potatoes, and turnips. Stem vegetables
            include asparagus and kohlrabi.
          </div>
          <button class="add-btn">Add To Cart</button>
          <div class="category">Category: <span>Fresh Vegetable</span></div>
          <div class="list-key">
            <small>broccoli </small>
            <small>fresh vegetable</small>
          </div>
          <div class="share" id="scroll-to-replies">
            <p class="title">Share your social network</p>
            <p>
              For get lots of traffic from social network share this product
            </p>
            <div class="social-icon">
              <a href="#" target="blank" class="follow-link">
                <svg-vue icon="facebook" class="dark-icon"></svg-vue>
              </a>
              <a href="#" target="blank" class="follow-link">
                <svg-vue icon="twitter" class="dark-icon"></svg-vue>
              </a>
              <a href="#" target="blank" class="follow-link">
                <svg-vue icon="youtube" class="dark-icon"></svg-vue>
              </a>
              <a href="#" target="blank" class="follow-link">
                <svg-vue icon="linkedin" class="dark-icon"></svg-vue>
              </a>
            </div>
          </div>
        </div>
        <div class="introduce">
          <div class="item">
            <svg-vue
              icon="truct"
              viewBox="20 0 550 550"
              class="dark-icon"
            ></svg-vue>
            <p>
              Free shipping apply to all orders over shipping <span>$100</span>
            </p>
          </div>
          <div class="item">
            <svg-vue
              icon="home-1"
              class="dark-icon"
              viewBox="0 0 650 650"
            ></svg-vue>
            <p>Home Delivery within <span>1 Hour</span></p>
          </div>
          <div class="item">
            <svg-vue
              icon="dollar"
              class="dark-icon"
              viewBox="150 0 950 950"
            ></svg-vue>
            <p>Cash on Delivery Available</p>
          </div>
          <div class="item">
            <svg-vue
              icon="pending"
              class="dark-icon"
              viewBox="0 -5 35 35"
            ></svg-vue>
            <p><span>7</span> Days returns money back guarantee</p>
          </div>
          <div class="item">
            <svg-vue
              icon="shield"
              class="dark-icon"
              viewBox="0 -100 600 600"
            ></svg-vue>
            <p>Warranty not available this item</p>
          </div>
          <div class="item">
            <svg-vue icon="sun" class="dark-icon"></svg-vue>
            <p>Guaranteed 100% organic from natural products.</p>
          </div>
          <div class="item">
            <svg-vue
              icon="location"
              class="dark-icon"
              viewBox="0 0 400 400"
            ></svg-vue>
            <p>
              Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA,
              United States 96522
            </p>
          </div>
        </div>
      </div>
      <h3 class="title">Reviews From Customers</h3>
      <div class="replies">
        <div class="no-reviews" v-show="!hasReviews">
          <svg-vue icon="smile-star" class="dark-icon"></svg-vue>
          <p>Has no reviews for this product yet</p>
        </div>
        <div class="left" v-show="hasReviews">
          <div class="chart">
            <div class="item total">
              <p>4.6</p>
              <div class="total-review-point">
                <star-rating
                  :star-size="15"
                  :rating="3.5"
                  :read-only="true"
                  :show-rating="false"
                  :increment="0.01"
                  :border-width="3"
                  border-color="orange"
                  :padding="Number(7)"
                  inactive-color="#fff"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                />
                14 Reviews
              </div>
            </div>
            <div class="item">
              <star-rating
                :star-size="8"
                :rating="5"
                :read-only="true"
                :show-rating="false"
                :border-width="3"
                inactive-color
                active-border-color="orange"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
              />
              <small class="full">
                <small class="part"></small>
              </small>
              <p>10</p>
            </div>
            <div class="item">
              <star-rating
                :star-size="8"
                :rating="4"
                :read-only="true"
                :show-rating="false"
                :border-width="3"
                active-border-color="orange"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
              />
              <small class="full">
                <small class="part"></small>
              </small>
              <p>5</p>
            </div>
            <div class="item">
              <star-rating
                :star-size="8"
                :rating="3"
                :read-only="true"
                :show-rating="false"
                :border-width="3"
                active-border-color="orange"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
              />
              <small class="full">
                <small class="part"></small>
              </small>
              <p>0</p>
            </div>
            <div class="item">
              <star-rating
                :star-size="8"
                :rating="2"
                :read-only="true"
                :show-rating="false"
                :border-width="3"
                active-border-color="orange"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
              />
              <small class="full">
                <small class="part"></small>
              </small>
              <p>0</p>
            </div>
            <div class="item">
              <star-rating
                :star-size="8"
                :rating="1"
                :read-only="true"
                :show-rating="false"
                :border-width="3"
                active-border-color="orange"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
              />
              <small class="full">
                <small class="part"></small>
              </small>
              <p>0</p>
            </div>
          </div>
          <div class="sort">
            <h3 class="fill-with">Filter with:</h3>
            <div class="option">
              <label id="latest" :class="{ active: latest }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="latest"
                ></svg-vue>
                Latest
                <input
                  @click="toggleLatest"
                  type="checkbox"
                  v-model="userOptions"
                  id="latest"
                  value="latest"
                />
              </label>
              <label id="5stars" :class="{ active: fiveStars }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="fiveStars"
                ></svg-vue>
                5
                <star-rating
                  :star-size="13"
                  :read-only="true"
                  :show-rating="false"
                  :max-rating="1"
                  :rating="fiveStars ? 1 : 0"
                  :border-width="3"
                  border-color="#bbb"
                  active-border-color="orange"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="star"
                />
                <input
                  @click="toggleFiveStars"
                  type="checkbox"
                  v-model="userOptions"
                  id="5stars"
                  value="5"
                />
              </label>
              <label id="4stars" :class="{ active: fourStars }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="fourStars"
                ></svg-vue>
                4
                <star-rating
                  :star-size="13"
                  :read-only="true"
                  :show-rating="false"
                  :max-rating="1"
                  :rating="fourStars ? 1 : 0"
                  :border-width="3"
                  border-color="#bbb"
                  active-border-color="orange"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="star"
                />
                <input
                  @click="toggleFourStars"
                  type="checkbox"
                  v-model="userOptions"
                  id="4stars"
                  value="4"
                />
              </label>
              <label id="3stars" :class="{ active: threeStars }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="threeStars"
                ></svg-vue>
                3
                <star-rating
                  :star-size="13"
                  :read-only="true"
                  :show-rating="false"
                  :max-rating="1"
                  :rating="threeStars ? 1 : 0"
                  :border-width="3"
                  border-color="#bbb"
                  active-border-color="orange"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="star"
                />
                <input
                  @click="toggleThreeStars"
                  type="checkbox"
                  v-model="userOptions"
                  id="3stars"
                  value="3"
                />
              </label>
              <label id="2stars" :class="{ active: twoStars }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="twoStars"
                ></svg-vue>
                2
                <star-rating
                  :star-size="13"
                  :read-only="true"
                  :show-rating="false"
                  :max-rating="1"
                  :rating="twoStars ? 1 : 0"
                  :border-width="3"
                  border-color="#bbb"
                  active-border-color="orange"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="star"
                />
                <input
                  @click="toggleTwoStars"
                  type="checkbox"
                  v-model="userOptions"
                  id="2stars"
                  value="2"
                />
              </label>
              <label id="1stars" :class="{ active: oneStars }">
                <svg-vue
                  icon="correct"
                  class="dark-icon"
                  viewBox="-100 -50 500 500"
                  v-show="oneStars"
                ></svg-vue>
                1
                <star-rating
                  :star-size="13"
                  :read-only="true"
                  :show-rating="false"
                  :max-rating="1"
                  :rating="oneStars ? 1 : 0"
                  :border-width="3"
                  border-color="#bbb"
                  active-border-color="orange"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="star"
                />
                <input
                  @click="toggleOneStars"
                  type="checkbox"
                  v-model="userOptions"
                  id="1stars"
                  value="1"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="right" v-show="hasReviews">
          <Review />
          <Review />
          <Review />
          <Review />
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import Review from "../components/review.vue";
import Pagination from "../components/PaginationComponent.vue";
export default {
  name: "ProductView",
  components: {
    StarRating,
    Review,
    Pagination,
  },
  data() {
    return {
      userOptions: [],
      latest: null,
      fiveStars: null,
      fourStars: null,
      threeStars: null,
      twoStars: null,
      oneStars: null,
      hasReviews: true,
    };
  },
  methods: {
    toggleLatest() {
      this.latest = !this.latest;
    },
    toggleFiveStars() {
      this.fiveStars = !this.fiveStars;
    },
    toggleFourStars() {
      this.fourStars = !this.fourStars;
    },
    toggleThreeStars() {
      this.threeStars = !this.threeStars;
    },
    toggleTwoStars() {
      this.twoStars = !this.twoStars;
    },
    toggleOneStars() {
      this.oneStars = !this.oneStars;
    },
  },
};
</script>
<style lang="scss" scoped>
.product-container {
  padding: 2.5rem;
  background-color: rgba(249, 250, 251, 1);
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
  }
  .link {
    font-family: sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
    font-size: 0.85rem;
    width: 100%;
    line-height: 1.5rem;
    span {
      font-family: sans-serif;
      font-weight: 600;
    }
    .dark-icon {
      margin: 0 0.5rem;
      width: 9px;
      height: auto;
      ::v-deep path {
        fill: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .product-info {
    display: grid;
    grid-template-columns: 35% 35% 27%;
    grid-gap: 1rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    margin: 1rem 0;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 760px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 0.5rem;
    }
    .image {
      width: 100%;
      display: block;
      position: relative;
      margin: 0 auto;
      max-width: 500px;
      @media (max-width: 760px) {
        max-width: initial;
        max-height: 500px;
      }
      img {
        transform: scale(0.8);
        @media (max-width: 1200px) {
          transform: scale(1);
        }
      }
      .discount-info {
        position: absolute;
        left: 1rem;
        top: 1rem;
        font-size: 0.75rem;
        color: #fff;
        background-color: rgb(249 115 22);
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
      }
      @media (max-width: 1200px) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      @media (max-width: 760px) {
        grid-column-start: initial;
        grid-column-end: initial;
      }
    }
    .text-info {
      .title {
        font-family: sans-serif;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .ratting {
        display: flex;
        height: 1.5rem;
        margin-bottom: 0.25rem;
        a {
          color: rgba(107, 114, 128, 1);
          margin-left: 0.5rem;
          cursor: pointer;
        }
      }
      .price {
        width: 100%;
        display: inline-block;
        font-family: sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        span {
          font-size: 1.125rem;
          color: rgb(156 163 175);
          text-decoration: line-through;
        }
      }
      .stock {
        display: inline-block;
        font-size: 0.75rem;
        color: rgba(5, 150, 105, 1);
        background-color: rgba(209, 250, 229, 1);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
        cursor: pointer;
        margin: 0.5rem 0;
        &.out-stock {
          color: rgba(220, 38, 38, 0.8);
          background-color: rgba(254, 226, 226, 1);
        }
      }
      .description {
        width: 100%;
        font-size: 0.875rem;
        color: rgba(107, 114, 128, 1);
        line-height: 1.75rem;
        margin-bottom: 1rem;
        max-height: 300px;
        padding-right: 1rem;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 5px;
          background-color: #f5f5f5;
        }
      }
      .add-btn {
        display: inline-block;
        cursor: pointer;
        background-color: rgba(16, 185, 129, 1);
        color: #fff;
        font-weight: 600;
        font-family: sans-serif;
        border-radius: 7px;
        transition: 0.25s;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.75rem 2rem;
        &:hover {
          background-color: rgba(5, 150, 105, 1);
        }
      }
      .category {
        margin-top: 0.5rem;
        color: rgba(55, 65, 81, 1);
        font-weight: 600;
        font-family: sans-serif;
        font-size: 0.85rem;
        line-height: 1.75rem;
        span {
          color: rgba(107, 114, 128, 1);
          font-size: 0.85rem;
        }
      }
      .list-key {
        width: 100%;
        margin: 0.5rem 0;
        small {
          display: inline-block;
          padding: 3px 0.5rem;
          background-color: rgba(229, 231, 235, 1);
          color: rgba(107, 114, 128, 1);
          font-weight: 600;
          font-size: 0.75rem;
          margin-right: 5px;
          border-radius: 9999px;
        }
      }
      .share {
        margin-top: 2rem;
        .title {
          font-size: 1rem;
          font-family: sans-serif;
          line-height: 1.5rem;
          font-weight: 600;
        }
        p {
          color: rgba(107, 114, 128, 1);
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-family: sans-serif;
        }
        .social-icon {
          display: flex;
          margin-top: 1rem;
          .follow-link {
            cursor: pointer;
            margin-left: 0.5rem;
            width: 30px;
            height: auto;
          }
        }
      }
    }
    .introduce {
      padding: 2rem;
      background-color: rgba(249, 250, 251, 1);
      border: 1px solid rgba(243, 244, 246, 1);
      border-radius: 10px;
      .item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.75rem 0;
        .dark-icon {
          width: 25px;
          max-width: 25px;
          min-width: 25px;
          height: auto;
          ::v-deep path {
            stroke-width: 10;
          }
        }
        p {
          color: rgba(107, 114, 128, 1);
          line-height: 1.25rem;
          font-size: 0.875rem;
          margin-left: 0.5rem;
          span {
            font-weight: 700;
            font-family: sans-serif;
          }
        }
      }
    }
  }
  .title {
    font-weight: 550;
    font-size: 1.125rem;
    font-family: sans-serif;
    text-transform: capitalize;
  }
  .replies {
    border-radius: 10px;
    background-color: #fff;
    margin: 1rem 0;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    @media (max-width: 1024px) {
      gap: initial;
    }
    @media (max-width: 860px) {
      flex-direction: column;
    }
    .no-reviews {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        max-width: 100px;
        ::v-deep path {
          fill: #ccc;
        }
      }
      p {
        margin: 2rem 0;
        color: #4b5563;
        font-size: 0.9rem;
      }
    }
    .left {
      position: sticky;
      top: 138px;
      width: 100%;
      min-width: 310px;
      max-width: 310px;
      max-height: 400px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media (max-width: 860px) {
        max-width: 100%;
        position: initial;
        flex-direction: row;
      }
      @media (max-width: 600px) {
        padding: 1rem;
      }
      @media (max-width: 500px) {
        max-width: 100%;
        position: initial;
        flex-direction: column;
        padding: 0.5rem;
      }
      .chart {
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 0.8rem;
          color: #bbb;
          line-height: 1.1rem;
          .full {
            min-width: 150px;
            display: block;
            height: 6px;
            border-radius: 9999px;
            background-color: rgba(249, 250, 251, 1);
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            overflow: hidden;
            .part {
              display: block;
              height: 100%;
              width: 50%;
              background-color: #4b5563;
              border-radius: 9999px;
            }
          }
        }
        .total {
          width: 100%;
          margin-bottom: 1rem;
          display: flex;
          justify-content: flex-start;
          p {
            font-weight: 600;
            font-family: sans-serif;
            font-size: 1.875rem;
            margin-right: 1rem;
            color: #000;
          }
          .total-review-point {
            flex: 1;
            font-size: 0.8rem;
            color: #4b5563;
            line-height: 1.2rem;
          }
        }
      }
      .sort {
        width: 100%;
        .fill-with {
          width: 100%;
          line-height: 2rem;
          font-size: 1rem;
          font-weight: normal;
        }
        input {
          display: none;
        }
        .option {
          width: 100%;
          margin-top: 0.5rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 0.5rem;
          label {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            font-size: 0.9rem;
            color: #4b5563;
            padding: 0.5rem 1.2rem;
            background-color: rgba(249, 250, 251, 1);
            border: 1px solid transparent;
            border-radius: 5px;
            font-family: sans-serif;
            cursor: pointer;
            .dark-icon {
              margin-right: 0.5rem;
              width: 20px;
              ::v-deep path {
                fill: rgb(26, 148, 255);
              }
            }
            &.active {
              background-color: rgba(249, 250, 251, 1);
              border: 1px solid rgb(26, 148, 255);
              color: rgb(26, 148, 255);
            }
            .star {
              margin-top: 4px;
              margin-left: 0.25rem;
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      padding: 2rem;
      @media (max-width: 600px) {
        padding: 1rem;
      }
    }
  }
}
</style>
