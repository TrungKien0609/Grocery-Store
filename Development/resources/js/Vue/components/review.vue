<template>
  <div class="review-container">
    <div class="header">
      <div class="image">
        <img :src="review.user.image" alt="image" />
      </div>
      <div class="info">
        <p class="name">{{ review.user.name }}</p>
        <div class="rating">
          <StarRating
            :star-size="10"
            :read-only="true"
            :show-rating="false"
            :max-rating="5"
            :rating="Number(review.star)"
            :border-width="3"
            border-color="#bbb"
            active-border-color="orange"
            :star-points="[
              23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
              19, 31, 17,
            ]"
          />
        </div>
        <div class="status">
          <svg-vue
            icon="correct"
            class="dark-icon"
            viewBox="-100 -50 500 500"
          ></svg-vue>
          <p class="text">{{ review.state }}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <p class="text">
        {{ review.description }}
      </p>
      <div class="images">
        <div
          class="image"
          v-for="(item, index) in review.reviewImages"
          :key="index"
        >
          <img :src="item.image" alt="image" />
        </div>
      </div>
      <div class="time">{{ new Date(review.created_at).toDateString() }}</div>
      <div class="action">
        <div :class="[likeAction ? 'active' : '', 'like']" @click="toggleLike">
          <svg-vue icon="like" class="dark-icon"></svg-vue>
          <span>{{ review.like_amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "review",
  components: {
    StarRating: () => import("vue-star-rating"),
  },
  data() {
    return {
      likeAction: null,
      commentAction: null,
    };
  },
  props: ["review"],
  methods: {
    toggleLike() {
      this.likeAction = !this.likeAction;
      if (this.likeAction) {
        this.review.like_amount++;
      } else {
        this.review.like_amount--;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.review-container {
  width: 100%;
  margin-bottom: 1.5rem;
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    .image {
      width: 50px;
      max-width: 50px;
      min-width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: 50%;
      background-color: #ccc;
      color: #4b5563;
      border: 1px solid #eee;
      overflow: hidden;
    }
    .info {
      .name {
        font-weight: 600;
        font-family: sans-serif;
        font-size: 1.1rem;
        color: #4b5563;
        line-height: 1.75rem;
      }
      .rating {
        gap: 1rem;
        line-height: 1.75rem;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .status {
        display: flex;
        align-items: center;
        .dark-icon {
          width: 13px;
          height: 13px;
          padding: 2px;
          border-radius: 50%;
          background-color: #10b981;
          margin-right: 0.5rem;
          ::v-deep path {
            fill: #fff;
          }
        }
        .text {
          font-size: 0.85rem;
          color: #10b981;
        }
      }
    }
  }
  .content {
    width: 100%;
    margin-top: 1.5rem;
    .text {
      width: 100%;
      max-width: 700px;
      font-size: 0.8rem;
      color: #000;
    }
    .images {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      .image {
        width: 100px;
        min-width: 100px;
        max-width: 100px;
        height: 100px;
        min-height: 100px;
        max-height: 100px;
        border-radius: 10px;
        border: 1px solid #eee;
        overflow: hidden;
        @media (max-width: 500px) {
          min-width: 100px;
          max-width: 100px;
          height: 100px;
          min-height: 100px;
          max-height: 100px;
          border-radius: 7px;
        }
      }
    }
    .time {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: #4b5563;
    }
    .action {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      .like,
      .comment-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 7px;
        border: 1px solid #10b981;
        background-color: #fff;
        outline: none;
        font-size: 0.9rem;
        font-weight: 600;
        color: #10b981;
        cursor: pointer;
        transition: 0.25s;
        &:hover {
          background-color: rgb(16, 185, 129, 0.8);
          color: #fff;
          .dark-icon {
            ::v-deep path {
              fill: #fff;
            }
          }
        }
        &.active {
          background-color: rgb(16, 185, 129, 0.8);
          color: #fff;
          .dark-icon {
            ::v-deep path {
              fill: #fff;
            }
          }
        }
      }
      .like {
        display: inline-flex;
        align-items: center;
        .dark-icon {
          width: 15px;
          height: 0.9rem;
          margin-right: 0.5rem;
          ::v-deep path {
            fill: #10b981;
          }
        }
      }
    }
  }
}
</style>
