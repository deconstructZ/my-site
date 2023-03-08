<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <p class="title">{{ data.siteTitle }}</p></template
    >

    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Contact from "./Contact";
import Menu from "./Menu";
import Avatar from "@/components/Avatar";
export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  padding: 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  background: @dark;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-img {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 13px;
}
.title {
  color: #fff;
  text-align: center;
  font-size: 1.2em;
}
</style>