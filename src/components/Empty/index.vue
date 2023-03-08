<template>
  <div class="Empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.Empty-containeredw {
  .self-center();
  color: @gray;
  text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>