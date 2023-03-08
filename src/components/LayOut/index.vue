<template>
  <div class="lay-out-container">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="main"><slot></slot></div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.lay-out-container {
  display: flex;
  width: 100%;
  height: 100%;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
   
  }
}
</style>