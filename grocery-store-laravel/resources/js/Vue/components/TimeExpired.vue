<template>
  <div class="time-expired-container">
    <div class="countdown">
      <div class="block">
        <p :class="[active ? 'active' : '', 'digit']">
          {{ days | two_digits }}
        </p>
      </div>
      <span>:</span>
      <div class="block">
        <p :class="[active ? 'active' : '', 'digit']">
          {{ hours | two_digits }}
        </p>
      </div>
      <span>:</span>
      <div class="block">
        <p :class="[active ? 'active' : '', 'digit']">
          {{ minutes | two_digits }}
        </p>
      </div>
      <span>:</span>
      <div class="block">
        <p :class="[active ? 'active' : '', 'digit']">
          {{ seconds | two_digits }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimeExpired",
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits(value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
};
</script>
<style lang="scss" scoped>
.time-expired-container {
  .countdown {
    display: flex;
    align-items: center;
  }
  .block {
    display: flex;
    flex-direction: column;
  }

  .text {
    color: #1abc9c;
    font-size: 0.85rem;
    font-family: sans-serif;
    text-align: center;
  }

  .digit {
    color: #000;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: rgba(254, 226, 226, 1);
    margin: 0 3px;
    &.active {
      background-color: rgba(236, 253, 245, 1);
    }
  }
}
</style>
