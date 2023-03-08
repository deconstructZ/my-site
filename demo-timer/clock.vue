<template>
  <h1>当前时间为:{{ current }}</h1>
</template>

<script>
export default {
  data() {
    return {
      current: this.getTime(),
      timer: null,
    };
  },
  methods: {
    getTime() {
      return new Date().toLocaleTimeString();
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.current = this.getTime();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>