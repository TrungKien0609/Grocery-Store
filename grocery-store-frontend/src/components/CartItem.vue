<template>
  <div class="item-container">
    <div class="img">
      <img src="@/assets/images/categories/carp-fish.png" alt="item" />
    </div>
    <div class="item">
      <p class="item-name">Fresh Rainbow Trout</p>
      <p class="item-price">Item Price $12</p>
      <div class="bot-tem">
        <p class="item-total">$72.00</p>
        <div class="action">
          <Dash class="dark-icon" />
          <p>5</p>
          <Plus class="dark-icon" />
        </div>
        <div class="delete-item">
          <Delete class="dark-icon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Plus from "../assets/Icons/plus.svg";
import Delete from "../assets/Icons/delete.svg";
import Dash from "../assets/Icons/minus.svg";
export default {
  name: "CartItem",
  components: {
    Plus,
    Delete,
    Dash,
  },
};
</script>
<style lang="scss" scoped>
.item-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  font-size: 0.85rem;
  transition: 0.25s;
  &:hover {
    background-color: rgba(249, 250, 251, 1);
  }
  cursor: pointer;
  .img {
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
    padding: 0.5rem;
    border: 1px solid #eee;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.2rem;
    .item-name {
      color: #000;
      font-weight: 500;
    }
    .item-price {
      font-size: 0.8rem;
      color: #ccc;
      margin-bottom: 0.5rem;
    }
    .bot-tem {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .item-total {
        font-weight: 600;
        font-family: sans-serif;
        font-size: 1rem;
      }
      .action {
        display: flex;
        justify-content: flex-start;
        background-color: #fff;
        border-radius: 5px;
        padding: 0.25rem 0;
        .dark-icon {
          transform: scale(0.65);
          margin: 0 0.7rem;
          padding: 0.1rem;
          path {
            fill: #ccc;
          }
        }
        p {
          font-weight: 600;
          color: #000;
        }
      }
      .delete-item {
        .dark-icon {
          transform: scale(0.65);
          width: 30px;
          height: auto;
          margin: 0;
          padding: 0;
          path {
            fill: rgb(248 113 113);
          }
        }
      }
    }
  }
}
</style>
