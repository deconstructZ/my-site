<template>
  <div class="test-container"><SiteAside /></div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 250px;
  height: 600px;
}
</style>