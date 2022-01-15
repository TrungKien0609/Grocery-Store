<template>
  <div class="loading-container">
    <div class="letter-holder">
      <div class="l-1 letter">L</div>
      <div class="l-2 letter">o</div>
      <div class="l-3 letter">a</div>
      <div class="l-4 letter">d</div>
      <div class="l-5 letter">i</div>
      <div class="l-6 letter">n</div>
      <div class="l-7 letter">g</div>
      <div class="l-8 letter">.</div>
      <div class="l-9 letter">.</div>
      <div class="l-10 letter">.</div>
    </div>
    <div class="load">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingEffect",
};
</script>
<style lang="scss" scoped>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .letter-holder {
    padding: 0 0 20px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
    font-size: 14px;
    color: #777;
    display: flex;
    justify-content: center;
    .letter {
      animation-name: loadingF;
      animation-duration: 1.6s;
      animation-iteration-count: infinite;
      animation-direction: linear;
    }
    .l-1 {
      animation-delay: 0.48s;
    }
    .l-2 {
      animation-delay: 0.6s;
    }
    .l-3 {
      animation-delay: 0.72s;
    }
    .l-4 {
      animation-delay: 0.84s;
    }
    .l-5 {
      animation-delay: 0.96s;
    }
    .l-6 {
      animation-delay: 1.08s;
    }
    .l-7 {
      animation-delay: 1.2s;
    }
    .l-8 {
      animation-delay: 1.32s;
    }
    .l-9 {
      animation-delay: 1.44s;
    }
    .l-10 {
      animation-delay: 1.56s;
    }
  }
  .load {
    .line {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      background-color: #10b981;
      &:nth-last-child(1) {
        animation: loading 1.5s 1s infinite;
      }
      &:nth-last-child(2) {
        animation: loading 1.5s 0.5s infinite;
      }
      &:nth-last-child(3) {
        animation: loading 1.5s 0s infinite;
      }
    }
  }
}
@keyframes loading {
  0% {
    height: 1rem;
  }
  50% {
    height: 2rem;
  }
  100% {
    height: 1rem;
  }
}
@keyframes loadingF {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
