<template>
  <div v-show="show" class="to-top" @click="handleClick">ToTop</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      //   console.log(dom);
      if (!dom) {//切换页面dom就没了 没了我就啥都不做
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 500 ? true : false;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.to-top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: @primary;
  z-index: 999;
  position: fixed;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>