<template>
  <div class="test-container">
    <LayOut>
  

      <div class="main">主区域 宽度占满剩余空间</div>

      <template #right>
        <div class="right">左边区域宽度适应内容溢出隐藏</div>
      </template>
    </LayOut>
  </div>
</template>

<script>
import LayOut from "./";
export default {
  components: {
    LayOut,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 600px;
}
.left {
  width: 200px;
  height: 100%;
  background: lightblue;
}
.main {
  width: 100%;
  height: 100%;
  background: lightcoral;
}
.right {
  width: 150px;
  height: 100%;
  background: lightgreen;
}
</style>