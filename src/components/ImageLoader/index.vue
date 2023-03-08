<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" v-if="!everythingDone" />
    <img
      :src="src"
      @load="Handleloaded"
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //原图加载完成
      everythingDone: false,
    };
  },
  computed: {
    //原图透明度
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },

  methods: {
    Handleloaded() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
      }, this.duration);
      this.$emit("load")
      // console.log(newSrc)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
}
img {
  object-fit: cover;
  .self-fill();
  &.placeholder {
    filter: blur(2vh);
  }
}
</style>