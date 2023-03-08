<template>
  <div class="test-container">
    <button>显示隐藏</button>
    <Loading />
  </div>
</template>

<script>
import Loading from "./";
export default {
  components: {
    Loading,
  },
};
</script>

<style>
.test-container {
  position: relative;
}
</style>