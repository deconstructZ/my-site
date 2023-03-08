<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background: #202020;
  margin: 0 auto;
  padding-top: 200px;
}
</style>