<template>
  <div class="app-container">
    <LayOut>
      <template #left>
        <div class="aside"><SiteAside /></div>
      </template>
      <!-- 渲染到router view时会把它当作插槽 等待插件放入 -->
      <router-view></router-view>
    </LayOut>
    <ToTop />
  </div>
</template>

<script>
import LayOut from "@/components/LayOut/index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
import ToTop from "@/components/ToTop";
export default {
  components: {
    SiteAside,
    LayOut,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.app-container {
  .self-fill (fixed);
  // background: lightcoral;
}
.aside {
  width: 250px;
  height: 100%;
}
</style>