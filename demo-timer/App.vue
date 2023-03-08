<template>
  <div>
    <clock v-if="showClock" />
    <button @click="showClock = !showClock">显示隐藏</button>
  </div>
</template>

<script>
import clock from "./clock.vue";
export default {
  data() {
    return {
      showClock: false,
    };
  },
  components: {
    clock,
  },
};
</script>

<style>
</style>