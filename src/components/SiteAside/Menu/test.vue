<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: { Menu },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 400px;
  height: 600px;
  border: 1px solid red;
  background: #202020;
  margin: 0 auto;
  
}

</style>

