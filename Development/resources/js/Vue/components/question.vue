<template>
  <div class="question-container">
    <div class="question" @click="toggleShow">
      <h3>{{ question.name }}</h3>
      <svg-vue icon="right-chevron" class="dark-icon" v-show="!show"></svg-vue>
      <svg-vue icon="down-arrow" class="dark-icon" v-show="show"></svg-vue>
    </div>
    <div class="anwser" v-show="show">
      {{ question.answer }}
    </div>
  </div>
</template>
<script>
export default {
  name: "question",
  props: ["question"],
  data() {
    return {
      show: null,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.question-container {
  margin: 1rem 0;
  .question {
    width: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgba(249, 250, 251, 1);
    border-radius: 7px;
    cursor: pointer;
    h3 {
      font-size: 1rem;
      font-weight: 500;
      color: rgba(75, 85, 99, 1);
    }
    .dark-icon {
      width: 12px;
      height: auto;
      ::v-deep path {
        fill: rgba(75, 85, 99, 1);
      }
    }
  }
  .anwser {
    font-size: 0.9rem;
    padding: 1rem;
    line-height: 1.5rem;
    color: rgba(107, 114, 128, 1);
  }
}
</style>
