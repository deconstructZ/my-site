<template>
  <div
    class="carousel-item-container"
    @mousemove="handleMove"
    ref="outer"
    @mouseleave="handleLeave"
  >
    <div class="carousel-img-container" ref="inner" :style="getImgPos">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
      />
    </div>

    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";
import { get } from "http";

export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,

      mouseLeft: null, //鼠标在容器内的位置
      mouseTop: null,

      containerWidth: null,
      containerHeight: null,

      imgWidth: null,
      imgHeight: null,
    };
  },

  methods: {
    showWords() {
      // console.log(this.titleWidth, this.descWidth);
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transiton = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    handleMove(e) {
      // console.log(e);
      const rect = this.$refs.outer.getBoundingClientRect();
      this.mouseLeft = e.clientX - rect.left; //鼠标在容器内的坐标
      this.mouseTop = e.clientY - rect.top;
    },
    handleLeave() {
      this.DisX = this.imgWidth / 2 - this.containerWidth / 2;
      this.DisY = this.imgHeight / 2 - this.containerHeight / 2;
    },
    setSize() {
      this.containerWidth = this.$refs.outer.clientWidth;
      this.containerHeight = this.$refs.outer.clientHeight;
      this.imgWidth = this.$refs.inner.clientWidth;
      this.imgHeight = this.$refs.inner.clientHeight;
    },
  },
  computed: {
    getImgPos() {
      if (
        !this.imgHeight &&
        this.containerWidth &&
        this.imgHeight &&
        this.containerHeight
      ) {
        return;
      }
      const extraWidth = this.imgWidth - this.containerWidth;
      const extraHeight = this.imgHeight - this.containerHeight;
      const DisX = (extraWidth / this.containerWidth) * this.mouseLeft;
      const DisY = (extraHeight / this.containerHeight) * this.mouseTop;
      return {
        transform: `translate(${-DisX}px,${-DisY}px)`,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-img-container {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .desc {
    opacity: 0;
    color: #fff;
    transition: 500ms;
    position: absolute;
    top: 50%;
    left: 30px;
    letter-spacing: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .title {
    font-size: 2em;
    top: calc(50% - 40px);
  }
  .desc {
    font-size: 1.5em;
    top: calc(50% +20px);
  }
}
</style>